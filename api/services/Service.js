export default class Service {
  constructor (model) {
    this.model = model
  }

  getAll (query) {
    return this.model.find(query)
  }

  getById (id) {
    return this.model.findById(id)
  }

  updateById (id, data) {
    return this.model.findByIdAndUpdate(id, data)
  }

  create (data) {
    return this.model.create(data)
  }

  deleteById (id) {
    return this.model.findByIdAndDelete(id)
  }

  softDeleteById (id) {
    return this.model.findByIdAndUpdate(id, { isActive: true }, { new: true })
  }

  restoreById (id) {
    return this.model.findByIdAndUpdate(id, { isActive: false }, { new: true })
  }
}
