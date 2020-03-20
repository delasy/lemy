const Sequelize = require('sequelize')
const { CronJob } = require('cron')

const { EmailVerification } = require('./models')

const deleteOutdatedEmailVerifications = () => {
  return EmailVerification.destroy({
    where: {
      createdAt: {
        [Sequelize.Op.lt]: Sequelize.literal('NOW() - INTERVAL \'24 hours\'')
      }
    }
  })
}

const jobs = [
  { time: '*/10 * * * * *', onTick: deleteOutdatedEmailVerifications }
]

for (const job of jobs) {
  const cronJob = new CronJob(job.time, job.onTick)
  cronJob.start()
}
