import { Module } from '@nestjs/common'
import { SkillsService } from './skills.service'
import { SkillsController } from './skills.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Skill } from './entities/skill.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [TypeOrmModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
