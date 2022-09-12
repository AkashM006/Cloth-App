import { View, Image, Text } from 'react-native'
import React from 'react'
import StackHeader from '../components/StackHeader'
import List from '../components/Explore/List'

const DATA = [
  {
      id: 1,
      name: 'calca jogger',
      price: 150,
      link: 'https://s3-alpha-sig.figma.com/img/83d7/fd0a/c316364a545df63b2f51124d1c90ecef?Expires=1664150400&Signature=ap5SBgg9LSjzkwWeClEvaSPhnju9apBEsCzNVVisSb9hqqQCyZ3yZiBAwAGIVTXgwWINoQHiq0DcghMMkxAnrnw9a62RVfSfi5fbmxkNqwYPPIPdDMNY15QyDeAQw4-Y~gIRtUVsEWNgrkmuksZCNv1KzLSQ6rYXSnDUua2GoGw2aFakVmL7D3rGrEkt457KwUkUkGWGi7FqpCgUazhydjsFVguCEYEO-eWC2Yx6GBb3XDhyGgYcAUZX8DHD32GC1VoQZlTyAnfm0BmAHyIYELbuxlRzfVfSuHh0rcXzUY3juk5xATdV-Dr~Je6fYr7AIb-zTVgB8J9kWfgx-ildxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 2,
      name: 'jacket jeans',
      price: 280,
      link: 'https://s3-alpha-sig.figma.com/img/c9ad/7df8/f90b325c32de383b716a0fb86e2801aa?Expires=1664150400&Signature=K7YddIK4bybPUzcw5Izrq7KNqPqNrns7udC2MepqcEsiuLofrADRqFXoqIGjZr~twY3Ftb64T1dE4KWdIumgxUHvG8ZYixZJvDdHOwZLChSxzcoo1T8y--B2N56Y5GUVA0tIIt2fxtKdQeAiE~DsLydDZPjluWVyZaW5FUeMkkx8uIJ8ZH-vamK17h7XE0AjdS70JcCrnY-6esJGB-X9LnRW7K1W-kkhcsY5cJgSAcpqH92P2UkcJY9v0VTn1tPHO-TSVEcCHxwoY8iAK-7yW9U3Y4yYqg2qOUycLarWsFDUa7r7Ud4Xuc7KiTLrTjDIbRFE~C9FL5EMNOQS8bnXbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 3,
      name: 'sneaker brownies',
      price: 180,
      link: 'https://s3-alpha-sig.figma.com/img/b6c4/0827/bc26b8007c9f31ca66e8dae4f7417c1b?Expires=1664150400&Signature=AXOjA3~XvSkClYJGaTsIfB2MdXwtmv6oIE~Yj4xYjkF3kB6a5gjV3n0691vIyfM50U8XxW5ZBHR-uIAInF0X4gD8LB9NqI0RHGg5K2K-Wn4Txt5WaJTuCEvhm3eKYE4VShRyiXhqjJukyF~0k4see5ksbhPXcZpLajIjCrFYmQhSP8oYK-XpkkP5Dmqc~~zL-wMufxmsEgj-PUQOHykvGvMCAW~sAefF2AOlxFldsy5RDBL2MWsF4H9Vc8cy1-vTupLRhbjIHB9SUSjLHGTbWJWWPdWx11VxsZNrWSb7krzQNPwkfuo4SCSgrM~CDT~9JR~KauauicPJ7NtVEXGi3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 4,
      name: 'jacket bomber',
      price: 120,
      link: 'https://s3-alpha-sig.figma.com/img/7805/ee08/13d1d3b1d9092a1a1deb8016ca5d43e8?Expires=1664150400&Signature=Qbrs~mweAtISB0oeVBv2W6Q8wy63hH9iqhdULRJMCjsvtscxzf5Ux0OeLp4xqbSLNV7IPRcEI6Gyo-vLtMvE~iRUkHmeMLO2qlpzxMmdWPl8SJu5WpiaiyBzaTUyLZyxZ-vCtjMPMEyGTxmYG6r~4KLI-RRurK0SvbxX--wFn-whpVMWJ4eteXW8FROEOo6VQNBi126ozR7W~HeCmWOY2oT04TqEZHIS4I7XW0zOc1RaPCXGTMdLVzuMd2rrz1Crp7azbDGdcdm2ODO-5XHQHiJXQff9JB5gHQrYWO3ryyrvu4l1RY31iZ7r4f8mutdC5mPGvHNB-a1eeEKR4VlJyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 5,
      name: 'jacket brown',
      price: 180,
      link: 'https://s3-alpha-sig.figma.com/img/9239/c59d/60be7f515b825089b0e0b3c8581fa60b?Expires=1664150400&Signature=HOqegQJKnffTDS6NsGkQoDjEy0UswVHVc3AJd8eJwh-y0s900L-IqBAkCbwDK6moBd7brN4Ruj5r56Twzdtgy7WK0aI8La~mbHZuA06hNdZtC-aV4w9-Lm6DJi6d44XIwGZjdhawGvBl2MHzl1q9VLPcABkmYG0VYTIBWeW~toud-op9vBAXGCaIu5LX4GEKZFkwxY-X6DduHrwJIk0FiFd-fkIgGZubfilKMPbjwxtmPYNs6MkrkFoCb4IF~Mc48u~i0mlT1A7V9vJjQQIxXSXXZh9Je8-pEchmmeEE5l2iPVgF4WoMFKiqud-tGSY8sIadhF43CzUXDnFGBEZ2uA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 6,
      name: 'jeans skinny',
      price: 120,
      link: 'https://s3-alpha-sig.figma.com/img/c724/5419/373efb926f770a384986b949bcf26cfa?Expires=1664150400&Signature=M0qAZIWoQFmAOcZfe-vo5YsqEs6TltOBz1xftfyPems4BPvch5qETfdQvHKLSeORBK8ERQUlosH3canpZKmhA0QxXs8RxBURYNvN-XAIowPB-HhoPMrS4HtBtVXOplXt0HCvs8ion7ZjzKTnw5JjdxO63mY6gtOYSeXM1i7ZjcPLyr59FjTUXKEP7-4r-brYibu~iP2eiuWKoeT403F~Ksq2Ll2KK1GiK6cLeaM4jm7WuQBiao9YEpFmej~69fB6aQEVYO5xnSOiw~b6PO~Si81gf9cGFI1y0498NSzS2JvKhHOoVrjy0dzWg~uFNPwLylAJ6y3-qbdoLlPCIM~IdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 7,
      name: 'jacket bomber',
      price: 120,
      link: 'https://s3-alpha-sig.figma.com/img/7805/ee08/13d1d3b1d9092a1a1deb8016ca5d43e8?Expires=1664150400&Signature=Qbrs~mweAtISB0oeVBv2W6Q8wy63hH9iqhdULRJMCjsvtscxzf5Ux0OeLp4xqbSLNV7IPRcEI6Gyo-vLtMvE~iRUkHmeMLO2qlpzxMmdWPl8SJu5WpiaiyBzaTUyLZyxZ-vCtjMPMEyGTxmYG6r~4KLI-RRurK0SvbxX--wFn-whpVMWJ4eteXW8FROEOo6VQNBi126ozR7W~HeCmWOY2oT04TqEZHIS4I7XW0zOc1RaPCXGTMdLVzuMd2rrz1Crp7azbDGdcdm2ODO-5XHQHiJXQff9JB5gHQrYWO3ryyrvu4l1RY31iZ7r4f8mutdC5mPGvHNB-a1eeEKR4VlJyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 8,
      name: 'jacket brown',
      price: 180,
      link: 'https://s3-alpha-sig.figma.com/img/9239/c59d/60be7f515b825089b0e0b3c8581fa60b?Expires=1664150400&Signature=HOqegQJKnffTDS6NsGkQoDjEy0UswVHVc3AJd8eJwh-y0s900L-IqBAkCbwDK6moBd7brN4Ruj5r56Twzdtgy7WK0aI8La~mbHZuA06hNdZtC-aV4w9-Lm6DJi6d44XIwGZjdhawGvBl2MHzl1q9VLPcABkmYG0VYTIBWeW~toud-op9vBAXGCaIu5LX4GEKZFkwxY-X6DduHrwJIk0FiFd-fkIgGZubfilKMPbjwxtmPYNs6MkrkFoCb4IF~Mc48u~i0mlT1A7V9vJjQQIxXSXXZh9Je8-pEchmmeEE5l2iPVgF4WoMFKiqud-tGSY8sIadhF43CzUXDnFGBEZ2uA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
      id: 9,
      name: 'jeans skinny',
      price: 120,
      link: 'https://s3-alpha-sig.figma.com/img/c724/5419/373efb926f770a384986b949bcf26cfa?Expires=1664150400&Signature=M0qAZIWoQFmAOcZfe-vo5YsqEs6TltOBz1xftfyPems4BPvch5qETfdQvHKLSeORBK8ERQUlosH3canpZKmhA0QxXs8RxBURYNvN-XAIowPB-HhoPMrS4HtBtVXOplXt0HCvs8ion7ZjzKTnw5JjdxO63mY6gtOYSeXM1i7ZjcPLyr59FjTUXKEP7-4r-brYibu~iP2eiuWKoeT403F~Ksq2Ll2KK1GiK6cLeaM4jm7WuQBiao9YEpFmej~69fB6aQEVYO5xnSOiw~b6PO~Si81gf9cGFI1y0498NSzS2JvKhHOoVrjy0dzWg~uFNPwLylAJ6y3-qbdoLlPCIM~IdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

const ExploreScreen = () => {

  return (
    <View style={{height: '100%',}}>
      <StackHeader 
        title={'Explore'} 
        count={DATA.length} 
        HeaderRight={() => <View style={{flexDirection: 'row',}}>
        <Image style={{height:30,width:30}} source={require('../assets/bookmark-active.png')} /> 
        <Text style={{color: 'black',fontSize: 20, fontWeight: '600'}}>{DATA.length}</Text>
      </View>}
        />
      <List data={DATA} />
    </View>
  )
}

export default ExploreScreen;