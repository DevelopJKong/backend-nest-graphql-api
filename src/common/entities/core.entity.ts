import { Field } from '@nestjs/graphql';
import { CreateDateColumn, PrimaryColumn } from 'typeorm';

export class CoreEntity {
  @PrimaryColumn()
  @Field((type) => Number)
  id: number;

  @CreateDateColumn()
  @Field((type) => Date)
  createAt: Date;
}
