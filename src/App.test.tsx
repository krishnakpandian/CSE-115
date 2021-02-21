import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount, shallow, render as testing } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from './components/Request/sampleReturn.json'


import App from './App';
import AboutHome from './Views/AboutHome';
import Home from './Views/Home';
import About from './components/About/About';
import NavbarTop from './components/NavBar/navbar_top';
import NavbarBottom from './components/NavBar/navbar_bottom';
import NavbarMiddle from './components/NavBar/navbar_middle';
import ResultBody from './components/Results/result-body';
import Search from './components/search/Search';

Enzyme.configure({ adapter: new Adapter() });


describe("App", () => {
  test('Main App Rendering', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/We-Locate/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Views", () => {
  test('Home Rendering', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/We-Locate/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("About Page Rendering", () => {
    const { getByText } = render(<AboutHome/>);
    const linkElement = getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
  });
})

// describe("About Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// describe("Login Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// describe("Modal Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// describe("Navbar Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// describe("Results Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

// describe("Search Component", () => {
//   test('About Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  
//   test('Developer Card Rendering', () => {
//     const { getByText } = render(<Home />);
//     const linkElement = getByText(/We-Locate/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })



// test('About Rendering', () => {
//   const { getByText } = render(<About />);
//   const linkElement = getByText(/We-Locate/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('NavBar Rendering', () => {
//   const { getByText } = render(<Home />);
//   const linkElement = getByText(/We-Locate/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Result Rendering', () => {
//   const { getByText } = render(<ResultBody {...data}/>);
//   const linkElement = getByText(/About Us/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Search Rendering', () => {
//   const { getByText } = render(<AboutHome/>);
//   const linkElement = getByText(/About Us/i);
//   expect(linkElement).toBeInTheDocument();
// });
