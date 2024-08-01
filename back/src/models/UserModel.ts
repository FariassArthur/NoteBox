import mongoose, { Document, Schema } from 'mongoose';

// Definir a interface para o documento
interface UserAttributes extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Definir o schema
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); // Validação simples de e-mail
      },
      message: (props: { value: string }) => `${props.value} não é um e-mail válido!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Adiciona createdAt e updatedAt
});

// Criar o modelo com o schema
const User= mongoose.model<UserAttributes>('User', UserSchema);

export default User;
