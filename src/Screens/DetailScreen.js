import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CLOTHES from '../data/clothes'
import StackHeader from "../components/StackHeader"
import Description from '../components/Detail/Description'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/savedItemSlice'

const DetailScreen = ({route,navigation}) => {

    const {id} = route.params;
    
    const cloth = CLOTHES.find(cloth => cloth.id === id);
     
    return (
    <View style={{flex: 1,backgroundColor:'white',}}>
      <StackHeader title={cloth.title} HeaderRight={HeaderRight} cloth={cloth} />
      <View style={{}}>
          <Description cloth={cloth} />
      </View>
    </View>
  )
}

const HeaderRight = ({cloth}) => {

    const savedItems = useSelector(state => state.savedItems.items);

    const match = savedItems.find(item => item?.id === cloth.id);

    const dispatch = useDispatch();
    const [isBookmarked,setIsBookmarked] = useState(match?true:false);

    const saveHandler = (cloth) => {
        let item = cloth

        if(isBookmarked)dispatch(remove({id:item.id}))
        else dispatch(add({item}))

        setIsBookmarked(prevValue => !prevValue);
    }
    
    const url = isBookmarked === false?
    'https://s3-alpha-sig.figma.com/img/09d6/6ae5/58f7ed5cf61ff469d44902891f045d5b?Expires=1664150400&Signature=QkoCCeJB7nahhVGmT6ALs0-JCt2ufWMXwkWDU8SyMHBvmxxn4DHJ0Rl~2DUMLJW4qhEuBB7pnhC8~dwLURx5ovi1nFWpeDfLMhKtlhgrXpdTQEEM3jUp~nIkUwCJyYupH0NfIXMeG0P3iNXQKJPRtBVUrEMr13ysccEPs~sPK6-rpuHAdwuUlXNKYIE6MUZKTkGsJ7XPArsGaox-TJ1WlgyD2LqwGKtK5qwvOfXJ3eya7ahgFAc6LkamO1C3XwIb6YwQm50CqoRRIHDkOZEBFfiC7ILxS0KmCHDcMc3a1i2uJJm5NRXaKg2byvwQKArawP5BYRFVSgf7cqg4sT54Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA':
    'https://s3-alpha-sig.figma.com/img/713c/4325/a3b86229740a00a4db7636fbfa88c5dd?Expires=1664150400&Signature=QQquWAcKeJOhE2vXhSGB1MlwmFLvsOiGjDH6Vq~ZfoEETHC~FxA50pyq1Q1c9oKYkLzsNC54WKvAXzSLeiZ3VEge83npc~OBT~sbfoM2824235UOm3eEUc4ebsWhArI3ZPovqg4qWGD8PY1tCCwHotr1Ijm1BWGYQpWReBAKYz2ydV-Ffk~yvMirLntoPLPThK~3ij1Z9g3F6e52XZ4xsYmHLzeBWyuvjy7TZbjAesCRY7Cj8dPzZe204SGsCq~tIkulASaB3ocmk7eTN0JhTzsAUqpa7PCYHfGuji9iHmlKRJ8bS0Hk5p8RNjnmRa6e3vTBw3J4bs5Vx28heu7EHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    return <View>
        <TouchableOpacity onPress={() => saveHandler(cloth)}>
            <Image style={{height: 30,width: 30}} source={{uri: url }} />
        </TouchableOpacity>
    </View>
}

export default DetailScreen