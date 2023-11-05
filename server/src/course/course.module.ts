import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService,PrismaService]
})
export class CourseModule {}
