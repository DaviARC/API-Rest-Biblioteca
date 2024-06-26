import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo:
     {type: String,
       required: [true, "O titulo do livro é obrigátorio"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor é obrigátorio"]},
    editora: {type: String, required: [true, "A editora é obrigátoria"],
      enum: {
        values:["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido"
      }
    },
    numeroPaginas: {
      type: Number,
      validate:{ 
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginass deve estar entre 10 e 5000. O valor fornecido: {VALUE}"
      },
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;