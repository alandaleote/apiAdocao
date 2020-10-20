
const db = require("../models");
const Adotante = db.adotante;
const Op = db.Sequelize.Op;

exports.create = (req, res, next) => {
    if(!req.body) {
        res.status(400).send({
            message: "Conteúdo do Body não pode ser vazio."
        });
          return;
    }

    Adotante.create(req.body)
    .then(data => { res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        })
    })
};

exports.findAll = (req, res, next) => {
    Adotante.findAll({
      include: [
        db.pet,
      ]
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        });
    });
};

exports.findOne = (req, res, next) => {
    const id = req.params.id;

    Adotante.findOne({
      id: id,
      include: [
        db.pet,
      ]
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Adotante não encontrado."
        });
    });
};

exports.update = (req, res, next) => {
    const id = req.params.id;

    Adotante.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Adotante atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar Adotante com id=${id}. Adotante pode não ter sido encontrado ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar Adotante com id=" + id
        });
      });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Adotante.destroy(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Adotante deletado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível deletar Adotante com id=${id}. Adotante pode não ter sido encontrado ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao deletar Adotante com id=" + id
        });
      });

};

exports.deleteAll = (req, res, next) => {
    Adotante.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Todos adotantes deletados com sucesso!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algo inesperado aconteceu."
          });
        });
};

exports.findByName = (req, res, next) => {
  const nome = req.params.nome
  
  Adotante.findAll({ 
      where: { nome: { [Op.like]: '%'+nome+'%' } },
      include: [
        db.pet,
      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algo inesperado aconteceu."
        });
      });
  };
