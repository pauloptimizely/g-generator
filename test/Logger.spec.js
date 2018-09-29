const expect = require('expect')
const sinon = require('sinon')

const Logger = require('../src/Logger')

describe('Logger', function() {
  let logger;

  beforeEach(function() {
    logger = new Logger();
    logger._log = sinon.spy()
  })

  describe('log', function() {
    it('should log output with log prefix', function() {
      let message = 'test';
      let expectedArgs = [ [ message ], '\u001b[90mlog\u001b[39m' ];
      logger.log(message)
      expect(logger._log.calledOnce).toEqual(true)
      expect(logger._log.calledWith(expectedArgs[0], expectedArgs[1])).toEqual(true)
    })
  })

  describe('logError', function() {
    it('should log output with error prefix', function() {
      let message = 'test';
      let expectedArgs = [ [ message ], '\u001b[31merror\u001b[39m' ];
      logger.logError(message)
      expect(logger._log.calledOnce).toEqual(true)
      expect(logger._log.calledWith(expectedArgs[0], expectedArgs[1])).toEqual(true)
    });
  })

  describe('logCreate', function() {
    it('should log output with created prefix', function() {
      let message = 'test';
      let expectedArgs = [ [ message ], '\u001b[32mcreated\u001b[39m' ];
      logger.logCreate(message)
      expect(logger._log.calledOnce).toEqual(true)
      expect(logger._log.calledWith(expectedArgs[0], expectedArgs[1])).toEqual(true)     
    });
  })
})
