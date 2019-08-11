import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Button, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
