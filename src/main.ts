import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';

async function main() {
	const app = await NestFactory.create<NestFastifyApplication>(
		ApplicationModule,
		new FastifyAdapter(),
	);

	await app.listen(3000, '0.0.0.0');
}

main();
