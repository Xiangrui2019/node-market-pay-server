import { Controller, Get, Post } from '@nestjs/common';

@Controller('/api/v1')
export class ApplicationController {
    // 健康检查
    @Post("/ping")
    Ping(): string {
        return "Pong"
    }
}
