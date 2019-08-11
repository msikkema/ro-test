
import { init, getNotYetSeen, setHasInitiated, getRandomDog } from '@/services/dogService'

const axiosMock = require('axios')

describe('dogService', async () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('init', async () => {
    it('Should flatten api response into an array of strings', async () => {
      axiosMock.default.get = () => ({
        data: {
          message: {
            alps: ['skcm', 'skcl'],
            ibm: ['bucklingspring'],
            mitsumi: []
          }
        }
      })
      await init()
      const result = getNotYetSeen

      expect(result).toEqual([
        'alps-skcm',
        'alps-skcl',
        'ibm-bucklingspring',
        'mitsumi'
      ])

      expect(true).toBeTruthy
    })
  })

  describe('getRandomDog', async () => {
    it('should return a dog object from API response', async () => {
      setHasInitiated(false)

      const geStub = jest.fn()
        .mockResolvedValueOnce({
          data: {
            message: {
              alps: ['skcm']
            }
          }
        })
        .mockResolvedValueOnce({
          data: {
            message: 'https://images.dog.ceo/breeds/alps-skcm/n02086646_3484.jpg'
          }
        })
      axiosMock.default = { get: geStub }

      const { id, displayName } = await getRandomDog()

      expect(id).toEqual('alps-skcm')
      expect(displayName).toEqual('Skcm Alps')
    })
  })
})