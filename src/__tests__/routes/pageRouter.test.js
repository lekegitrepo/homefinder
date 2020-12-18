import React from 'react';
import { mount } from 'enzyme';
import ReactDom from 'react-dom';
import { MemoryRouter } from 'react-router';
import Home from '../../components/pages/Home';
import PageNotFound from '../../components/pages/PageNotFound.page';
import Homes from '../../components/pages/Homes.index.page';
import HomeDetail from '../../components/pages/Home.show.page';
import FavouriteHomes from '../../components/pages/FavouriteHomes';
import PageRouter from '../../containers/pageRouter.container';
import Registration from '../../components/auth/Registration';
import Login from '../../components/auth/Login';

test('Valid route path for the home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(Home)).toHaveLength(1)
})

test('Invalid route should redirect to page not found', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/some-invalid-routes']}>
      <PageRouter />
    </MemoryRouter>
  )
  expect(wrapper.find(Home)).toHaveLength(0)
  expect(wrapper.find(PageNotFound)).toHaveLength(1)
});

test('Valid route for the homes list index page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/homes']}>
      <Homes />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(Homes)).toHaveLength(1)
})

test('Valid route for the home show page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/home/:id']}>
      <HomeDetail />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(HomeDetail)).toHaveLength(1)
})

test('Valid route for the favourite houses page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/favourites']}>
      <FavouriteHomes />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(FavouriteHomes)).toHaveLength(1)
})

test('Valid route for the login page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/login']}>
      <Login />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(Login)).toHaveLength(1)
})

test('Valid route for the registration page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/registration']}>
      <Registration />
    </MemoryRouter>
  )
  expect(wrapper.find(PageNotFound)).toHaveLength(0)
  expect(wrapper.find(Registration)).toHaveLength(1)
})
