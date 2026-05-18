import { Kafka, Producer, Partitioners } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'ecommerce-platform',
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
});

let producer: Producer;

export async function getProducer(): Promise<Producer> {
  if (producer) return producer;

  try {
    producer = kafka.producer({ createIfMissing: true });
    await producer.connect();
    console.log('Kafka producer connected successfully');
    return producer;
  } catch (error) {
    console.error('Failed to connect Kafka producer:', error);
    throw error;
  }
}

export async function publishEvent(topic: string, message: any): Promise<void> {
  const p = await getProducer();
  await p.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
}

export async function disconnectProducer(): Promise<void> {
  if (producer) {
    await producer.disconnect();
    producer = undefined;
    console.log('Kafka producer disconnected');
  }
}
