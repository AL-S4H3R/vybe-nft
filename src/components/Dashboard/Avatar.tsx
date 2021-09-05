import React, { FC } from 'react'
import PixelCharacter from 'boring-avatars'
import { ElementPixelated, ImagePixelated } from 'react-pixelate'

interface Props {
    pubKey: string
}

const colors = ['#221F1F', '#11052C', '#3D087B', '#F43B86', '#FFE459']

const Avatar: FC<Props> = ({ pubKey }) => {
    
    // let url = `https://avatars.dicebear.com/api/identicon/:${pubKey}.svg?mood[]=happy`
    
    return (
        <div>
            {/* <ElementPixelated > */}
                <PixelCharacter 
                    name={pubKey}
                    size={256}
                    variant="pixel"
                    colors={colors}
                />
            {/* </ElementPixelated> */}
            {/* <img src={url} alt="svg" className="h-64 w-96"/>? */}
        </div>
    )
}

export default Avatar
