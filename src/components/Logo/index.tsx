import * as React from "react"
import { FaSignal } from "react-icons/fa"
import Label from "./label"
import { colors } from "src/lib/theme"

interface LogoProps {
    onClick?: React.MouseEventHandler<Element> | undefined,
    size: number,
    collapsed?: boolean,
    iconColor?: string,
    textColor?: string,
    paddingTop?: string,
    style?: React.CSSProperties
}

const Logo = (props: LogoProps) => {
    const cssDiv = {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 0,
        paddingTop: props.paddingTop ? props.paddingTop : 0
    }
    
    return (
        <>
            <div style={{...cssDiv, ...props.style}}>
                <FaSignal
                    rotate={270}
                    style={{transform: "rotate(270deg)"}}
                    color={props.iconColor ? props.iconColor : colors.red[500]}
                    size={(props.collapsed ? props.size * 4 : props.size * 4.5) + "px"}
                    onClick={props?.onClick} />
                {!props.collapsed &&
                    <div style={{ marginLeft: '0px' }}>
                        <Label 
                            width={props.size * 9 + "px"}
                            height={props.size * 9 + "px"}
                            color={props.textColor ? props.textColor : colors.white[400]} />
                    </div>}

            </div>
        </>
    )
}

export default Logo
