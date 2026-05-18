import { Kafka, Consumer } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'ecommerce-platform',
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
});

export async function createConsumer(groupId: string, topics: string[], onMessage: (topic: string, message: any) => Promise<void>): Promise<Consumer> {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();

  for (const topic of topics) {
    await consumer.subscribe({ topic, fromBeginning: false });
  }

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const payload = JSON.parse(message.value?.toString() || '{}');
      await onMessage(topic, payload);
    },
  });

  console.log(`Kafka consumer for group ${groupId} connected and subscribed to topics: ${topics.join(', ')}`);
  return consumer;
}

export async function disconnectConsumer(consumer: Consumer): Promise<void> {
  await consumer.disconnect();
  console.log('Kafka consumer disconnected');
}
