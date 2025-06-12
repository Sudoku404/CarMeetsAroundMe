import React from "react";
import Event from './Event'

const Meets = () => {
    return (
        <div className = "Meets">
            <table>
                <tbody>
                    <tr>
                        <Event event='Velocity Vanguard' src='Meet1Banner.png' desc='[For high-performance car enthusiasts]' link='Meet1' color='green'/>
                        <Event event='Rust & Revival' src='Meet2Banner.png' desc='[Ideal for classic/restoration car clubs]' link='Meet2' color='pink'/>
                        <Event event='Neon Nights Cruisers' src='Meet3Banner.png' desc='[Perfect for tuner cars with vibrant lighting]' link='Meet3' color='blue'/>
                    </tr>
                    <tr>
                        <Event event='Octane Overlords' src='Meet4Banner.png' desc='[Great for performance/modification-focused clubs]' link='Meet4' color='blue'/>
                        <Event event='Midnight Torque' src='Meet5Banner.png' desc='[Nighttime meetup focused group]' link='Meet5' color='pink'/>
                        <Event event='Vintage Velocity' src='Meet6Banner.png' desc='[Classic sports car preservationists]' link='Meet6' color='green'/>
                    </tr>
                    <tr>
                        <Event event='Gearhead Guild' src='Meet7Banner.png' desc='[All-inclusive for all car enthusiasts]' link='Meet7' color='green'/>
                        <Event event='Chrome & Caffeine' src='Meet8Banner.png' desc='Morning meetup club for classic car lovers' link='Meet8' color='green'/>
                        <Event event='Aussie Craft' src='Meet9Banner.png' desc='[Austrialian Based Car Enthusiasts]' link='Meet9' color='pink'/>
                    </tr>
                    <tr>
                        <Event event='Sunday Drivers Society' src='Meet10Banner.png' desc='[All-inclusive meet for all]' link='www.Meet10.com' color='blue'/>
                    </tr>
                </tbody>
            </table>
        </div>
       
    )
}

export default Meets;