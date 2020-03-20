const bcrypt = require('bcrypt')
const faker = require('faker')

module.exports = {
  up: async (queryInterface) => {
    const users = []

    for (let i = 0; i < 10; i++) {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      const gender = faker.name.gender()
      const birthtime = faker.date.past(50)
      const birthyear = birthtime.getFullYear()
      const birthmonth = ('0' + (birthtime.getMonth() + 1)).slice(-2)
      const birthday = ('0' + birthtime.getDate()).slice(-2)

      users.push({
        id: faker.random.uuid(),
        email: faker.internet.email(firstName, lastName).toLowerCase(),
        password: await bcrypt.hash(faker.internet.password(), 10),
        name: faker.name.findName(firstName, lastName, gender),
        username: faker.internet.userName(firstName, lastName),
        avatar: faker.image.avatar(),
        gender: gender.includes('Man')
          ? 'MALE'
          : gender.includes('Woman')
            ? 'FEMALE'
            : 'OTHER',
        birthdate: birthyear + '-' + birthmonth + '-' + birthday,
        bio: faker.lorem.sentence(),
        created_at: new Date(),
        updated_at: new Date()
      })
    }

    return queryInterface.bulkInsert('users', users)
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('users')
  }
}
