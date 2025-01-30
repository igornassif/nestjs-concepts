import { Controller, Get } from "@nestjs/common";

@Controller('manual-concepts')
export class ManualConceptsController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}