const expect = require('expect')
const sinon = require('sinon')

const Generator = require('../src/Generator')
const Logger = require('../src/Logger')
const FileSystem = require('../src/FileSystem')

describe('Generator', function() {
  let generator;
  let mockFileSystem;
  let mockLogger;
  let mockArgv;

  beforeEach(function() {
    mockFileSystem = sinon.createStubInstance(FileSystem)
    mockLogger = sinon.createStubInstance(Logger, {
      logError: sinon.stub(),
    })
    mockArgv = {
      _: ['mock generator']
    }

    generator = new Generator({
      fs: mockFileSystem,
      logger: mockLogger,
    }, mockArgv)

    generator.prompting = sinon.stub().resolves()
    generator.writing = sinon.stub()
  })

  describe('run', function() {
    it('should call prompting and writing', function() {
      return generator.run()
        .then(function() {
          expect(generator.prompting.calledOnce).toBe(true)
          expect(generator.writing.calledOnce).toBe(true)
        })
    });
  })
})
