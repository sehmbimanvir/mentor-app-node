import Mentor from '../models/mentor.model'

const store = async (req, res) => {
  const { name, email, tasks } = req.body
  try {
    const mentor = new Mentor({
      name, email, tasks
    })
    await mentor.save()
    return res.success('Mentor added successfully')
  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
}

const list = async (req, res) => {
  try {
    const mentors = await Mentor.find({})
    return res.success('Mentors Data', {
      mentors
    })

  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
}

const show = async (req, res) => {
  try {
    const { mentorId } = req.params
    if (!mentorId) {
      return res.error('Mentor Id is Missing', 422)
    }

    let mentor = await Mentor.findById(mentorId).select('-updatedAt')
    if (!mentor) {
      return res.error('Mentor not found', 404)
    }

    return res.success('Mentor Details', { mentor })

  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
}

const destroy = async (req, res) => {
  try {
    const { mentorId } = req.params
    if (!mentorId) {
      return res.error('Mentor Id is Missing', 422)
    }

    const mentor = await Mentor.findByIdAndDelete(mentorId)
    if (!mentor) {
      return res.error('Mentor Details not found', 404)
    }

    return res.success('Mentor deleted successfully')

  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
}

const update = async (req, res) => {
  try {
    const { mentorId } = req.params
    let { name, email, tasks } = req.body
    if (!mentorId) {
      return res.error('Mentor Id is Missing', 422)
    }

    const mentor = await Mentor.findByIdAndUpdate(mentorId, {
      name, email, tasks
    })

    if (!mentor) {
      return res.error('Mentor Details not found', 404)
    }

    return res.success('Mentor updated successfully')

  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
}

export {
  store,
  list,
  show,
  destroy,
  update
}

