import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Skill } from './entities/skill.entity';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [TypeOrmModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}