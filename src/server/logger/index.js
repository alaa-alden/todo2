import createLogger from './createlogger'
import config from '../config'

import { name as applicationName } from '../../../package.json'

const logger = createLogger({ applicationName, environmentName: config.environmentName })

export default logger
