import { Injectable } from '@nestjs/common'
import { CreateSkillDto } from './dto/create-skill.dto'
import { UpdateSkillDto } from './dto/update-skill.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Skill } from './entities/skill.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}
  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill'
  }

  async findAll() {
    return await this.skillRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`
  }

  remove(id: number) {
    return `This action removes a #${id} skill`
  }
}
