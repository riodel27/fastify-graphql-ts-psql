import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export default class Users {
	@PrimaryGeneratedColumn() // typeorm
	id: number; // graphql

	@Column()
	name: string
}
