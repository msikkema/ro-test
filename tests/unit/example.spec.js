// import { shallowMount } from '@vue/test-utils'
// import Button from '@/components/Button'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(Button, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('foo', () => {
  it('bar', () => {
    const wut = { foo: 'bar' }
    const huh = { bar: 'baz' }

    const zee = { ...wut, ...huh }

    expect(true).toBeTruthy
  })
})
