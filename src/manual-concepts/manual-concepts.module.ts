import { Get, Module } from "@nestjs/common";
import { ManualConceptsController } from "./manual-concepts.controller";

@Module({
    controllers: [ManualConceptsController],
    providers: []
})
export class ManualConceptsModule {}