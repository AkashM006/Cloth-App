import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'

const Description = ({cloth}) => {

    const [sliderValue, setSliderValue] = useState(0);

    const [currentSize, setCurrentSize] = useState('p');

    useEffect(() => {
        switch(sliderValue){
            case 0:
                setCurrentSize('p');
                break;
            case 35:
                setCurrentSize('m');
                break;
            case 70:
                setCurrentSize('g');
                break;
            case 100:
                setCurrentSize('gg');
                break;
            default:
                setSliderValue(0);
        }
    },[sliderValue])

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{width: '100%',alignItems:'center'}}>
          <Image style={{height: 250, width: 200}} source={{uri: 'https://s3-alpha-sig.figma.com/img/cbad/78aa/493e609d620539956b7a3f03f4fecd95?Expires=1664150400&Signature=OO5dD7BcdyfcO5DwyT5VQAbUkDjw0ItHLE-A0TtoWL1ZPWXtDBtvXp82XCcylTC~bxYH7iwr3v0xyeqdPvbuhl5ATE5~8yJ2ad3Y0prNM7AjSg5mfOm2I0T7HV8RgzA-fYv4QhIXC4lLw15ObVC0n1YmXSYqZVdi0T1AdDlASVR0zi61dWbrUgpxoZ6jd4pFfpxp~wfLtd7NIerouamFeD1vQL6hUEKZI~yog4ebbVnT6WHyCDRcdZYZW4Wh5VbB0DfxglyzX0WGme~O~pSRnSvlLLv~V6sxiUHjL~PiTHZIfghOVbV-yGGCl3VtU2LZMEtDKVENgMwu-HhnjX5N-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
        </View>
          <View style={{margin: '10%'}}>
              <Slider
               maximumValue={100}
               minimumValue={0}
               step={35}
               value={sliderValue}
               onValueChange={value => setSliderValue(value)}
               maximumTrackTintColor='black'
               minimumTrackTintColor='black'
               thumbTintColor='black'
               />
          </View>
          <View style={{marginHorizontal:'10%',flexDirection: 'row',justifyContent: 'space-between'}}>
            <View
            style={
              [styles.icon,{
                marginLeft: '5%',
                backgroundColor: currentSize === 'p'?'black':'#BEBEBE',
              }
            ]}>
              <Text
                style={{color:currentSize === 'p'?'white':'black'}}
              >
                  P
              </Text>
            </View>
              <View style={[styles.icon,{backgroundColor: currentSize === 'm'?'black':'#BEBEBE',}]}>
                <Text style={{color:currentSize === 'm'?'white':'black'}}>M</Text>
              </View>
              <View style={[styles.icon,{backgroundColor: currentSize === 'g'?'black':'#BEBEBE',}]}>
                <Text style={{color:currentSize === 'g'?'white':'black'}}>G</Text>
              </View>
              <View style={[styles.icon,{backgroundColor: currentSize === 'gg'?'black':'#BEBEBE',marginRight:'5%'}]}>
                <Text style={{color:currentSize === 'gg'?'white':'black'}}>X</Text>
              </View>
          </View>
      </View>
        <View style={{height: '25%',marginHorizontal:'5%',marginTop: '5%'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{color:'black'}}>
            Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Fermentum odio eu feugiat pretium nibh ipsum. Purus gravida quis blandit turpis cursus in hac. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Pharetra sit amet aliquam id diam. Cursus mattis molestie a iaculis at. Orci a scelerisque purus semper eget duis at. Nulla facilisi morbi tempus iaculis urna. Et odio pellentesque diam volutpat. Sed faucibus turpis in eu mi. Facilisis leo vel fringilla est ullamcorper eget. Nunc scelerisque viverra mauris in aliquam sem. Cras ornare arcu dui vivamus. Tellus id interdum velit laoreet. Est ultricies integer quis auctor elit. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Vel turpis nunc eget lorem. Senectus et netus et malesuada fames ac.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis. In est ante in nibh mauris cursus mattis. Condimentum mattis pellentesque id nibh. Ipsum consequat nisl vel pretium lectus quam id leo. Justo nec ultrices dui sapien eget mi proin sed libero. Eu scelerisque felis imperdiet proin fermentum. Sit amet nisl purus in mollis nunc sed id semper. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lectus mauris ultrices eros in cursus turpis massa. Ullamcorper eget nulla facilisi etiam dignissim. Vitae congue mauris rhoncus aenean. Dignissim suspendisse in est ante in nibh mauris. Pharetra et ultrices neque ornare aenean euismod.
            </Text>
          </ScrollView>
        </View>
        <View style={{marginTop: '5%',padding: '5%',flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{flex: 1}}>
             <Text style={{fontWeight:'800', fontSize: 20, color:'black',alignItems:'center'}}>
                $ 200
             </Text>
           </View>
           <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-evenly',flex: 2}}>
           <TouchableOpacity>
            <Image style={{height: 40,width:40}} source={{uri: 'https://s3-alpha-sig.figma.com/img/48e1/6e65/8d4feec1c1fe3cdd8f63502d6e7e3298?Expires=1664150400&Signature=WCL7l-lV3NBA9263P4xB004OiWdoI26O84UOpzbIcleZ2CU5eJKCFzIxtrIfdSgZ3IuTVuWgbB4zqMVK-vSce3OThuo882hTHtWnZenoGO0mjpmdGxVnlCuI7fkU-WH7xb-VDqSHNIDmKIEswNgsQWt-WRukkOclyArRnqT5IDIdebjAYjQF0SpSQuZElqpReiHaeANMXNG~XdHEaLAqQrRDOIgxfagklBBoPjt4-bpABIIIfZJLGiwtSLigmD7kDw0gswN~XZmV0sXxMO7BX1spZwvQgVJGB8ppLncD8r~z2RhTGNzBHrC6xvAgN11vjaaupOstXjozoc2g6OQZuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
           </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: '600',color: 'black'}}>1</Text>
            <TouchableOpacity>
            <Image style={{height: 40,width:40}} source={{uri: 'https://s3-alpha-sig.figma.com/img/9663/307c/a3e0b780da93e8ba8c2ec5f6a8101474?Expires=1664150400&Signature=fACzRwachvfC0m-YOpW3V-ux2kfftxFP6ZVZ8Y93fzeLRO7mHysoycIGePrs8pCMSv64dUYbvaNpqkFh98PQKvkwYbY4xKSijVcwZ-iYTshf2hlUDOyLqHhBljxARVK5mzFB0TVUbpq7PKzHB8HxcEbzOkl30aKLuSo70NCp-K-o~dHo75HFsum9OpQG4V2DQfnyECyxaOwrzcYI3EKwv3OzNcRt7VTCpiI0TeUDbu~Kk0I3D8eVWRUf5H8FJDN05m4wkP-5k58uOezwo0XO3BCspvrJR-GSMpPJ9COSieNrSqYMwdQpn7H~OZuQvA3pytFkny7xDsCcKFm85k~Ajw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,alignItems: 'flex-end',}}>
              <TouchableOpacity style={{backgroundColor:'#E2E6E6',borderRadius:20,padding: '10%'}}>
                  <Image style={{height: 30,width:30,}} source={{uri:'https://s3-alpha-sig.figma.com/img/c11a/535c/ad6c1afa2280a1071eec722c362fe4fc?Expires=1664150400&Signature=fcZqfSkarHSMgQHJlE4x7sw2BER0VmG-NNhsP5f75f-GKAxzUoW8HeBnffHOW5r7gFox6Qq0ji1fiZlVlXdmKke6wYpX~cUDoHe1z02An9c0abLs0uM0vrekulK-hazoH-DN6M~aVA0gxAIEmIKE60iwSPhnPNItkedPRiCaUQ21qtetoWqIhlbA0v1-DLc0kq4zRk22aJI74~ccQ-Lhj1AmrWFvi5K0rFrXWSi8PhXa1A9W4blwcB6nN9Erdpnwx3iRsQJIKIHctZ9ZsRJoiJWO4PwPkvIV3dZdBJGpmJztcKvrwBuuB1lD7XowN4yzvueriLKA3Fhyt0geI1Q4QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
              </TouchableOpacity>
           </View>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: '5%',
    },
    icon:{
      backgroundColor: '#BEBEBE',
      borderRadius: 100,
      padding: '2%',
      paddingHorizontal: '4%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
})

export default Description