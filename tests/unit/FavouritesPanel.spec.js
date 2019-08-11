import { shallowMount } from '@vue/test-utils'
import FavouritesPanel from '@/components/FavouritesPanel'

describe('FavouritesPanel', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render favourite dogs', () => {
    let wrapper = shallowMount(FavouritesPanel, {
      propsData: {
        savedDogs: [],
        handleRemoveDog: jest.fn(),
        handleToggleFavouritesModal: jest.fn()
      }
    })

    expect(wrapper.html()).toContain(
      'No favourite breeds yet'
    )
      
    wrapper = shallowMount(FavouritesPanel, {
      propsData: {
        savedDogs: [
          { imageUrl: 'someImage', id: 'someId', displayName: 'Some DisplayName' }
        ],
        handleRemoveDog: jest.fn(),
        handleToggleFavouritesModal: jest.fn()
      }
    })
    expect(wrapper.html()).toContain('<dogwrapper-stub>')

    wrapper = shallowMount(FavouritesPanel, {
      propsData: {
        savedDogs: [
          { imageUrl: 'someImage', id: 'someId', displayName: 'Some DisplayName' },
          { imageUrl: 'someImage', id: 'someId2', displayName: 'Some DisplayName' },
          { imageUrl: 'someImage', id: 'someId3', displayName: 'Some DisplayName' },
          { imageUrl: 'someImage', id: 'someId4', displayName: 'Some DisplayName' }        ],
        handleRemoveDog: jest.fn(),
        handleToggleFavouritesModal: jest.fn()
      }
    })

    expect(wrapper.html()).toContain('Your 4 favourite dog breeds')
  })
})
