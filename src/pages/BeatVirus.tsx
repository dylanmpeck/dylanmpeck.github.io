import { Box } from '@mui/material';
import PageTitle from '../components/Title';
import Paragraph from '../components/Paragraph';


const BeatVirus = () => {
    return (
        <Box>
            <PageTitle name="Beat Virus" variant='h2' align='left' />
            <Box sx={{ padding: '1em', aspectRatio: '16 / 9' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9JyZwx7B5Ws?si=zIWHVzQxZyVeRGyH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
            <PageTitle name="Overview" variant='h3' align='left' />
            <Paragraph 
                content="Beat Virus is a rhythm based shooter game in virtual reality developed for a Windows Immersive Headset with MRTK in Unity. This game was made in a little under a week's time for a Mixed Reality XR game jam." 
            />
            <Paragraph
                content="In Beat Virus, multi colored germ-like enemies spawn to the beat of the music and float towards the player. In order to survive and score points, the player must fight back with two different colored projectile weapons and hit the the enemy with the matching color. On top of that, one will build a combo multiplier if he or she shoots the enemies on beat."
            />
            <PageTitle name="Audio Visuals" variant='h3' align='left' />
            <Paragraph
                content="My main goal with this was to explore audio visualization in Unity and how I could integrate it with mixed reality gameplay. In Beat Virus, almost every element of the world around the player is reacting to the music in some shape or form. To do this, I used Unity's built in Fast Fourier transform method which Unity calls GetSpectrumData."
            />
            <Paragraph
                content="I pass in a samples float array of size 512 (samplesLeft and samplesRight in the above image) which is filled up with the audio spectrum data in the current timestamp. In this case, the whole frequency spectrum gets split up in 512 parts, or samples, from low to high accordingly and assigned to the samples float array. When reading the samples float array, higher values from a given index will represent bigger amplitudes for the corresponding frequency band."
            />
            <Box 
                sx={{ padding: '1em', width: '100%' }}
                component='img'
                src={process.env.PUBLIC_URL + '/FFTTest.gif'}
            />
            <Paragraph
                content="So, thanks to Unity, a lot of hard work is done already, however, 512 different frequency bands is a bit difficult to work with, and GetSpectrumData() requires the length of the float array to be a power of 2 with a minimum of 64 where slightly larger float array lengths produce more pleasant results without hurting performance. At this point, it's up to the programmer how he or she wants to shape the data for the application, but I decided to condense it into 8 frequency bands (low to high). With this setup, kick and bass sounds would generally be in the first or second frequency band, and it wasn't too difficult to isolate mids and highs either. I used this math to separate them."
            />
            <Box 
                sx={{ padding: '1em', width: '100%'}}
                component='img'
                src={process.env.PUBLIC_URL + '/FreqMath.png'}
            />
            <Paragraph
                content="If my song is exported with a sample rate of 22050 and we're using a sample spectrum data array of 512, then each sample, or index of the array, will represent roughly 43hz on the frequency spectrum. So, the first two samples would represent 0hz-83hz, the next four samples (indexes 2-5) would represent 87hz-258hz, and so on. Using powers of 2 separated the frequency bands pretty nicely but ended up with a total of 510, so I added an extra two samples to the last frequency band."
            />
            <Paragraph
                content="Looping from 0 to 7, I get the sample count I wanted from the math above by taking the current index of the loop squared multiplied by 2. Then, I use that sample count to loop through the number of samples, or float array indexes, belonging to that frequency band and average them. Finally, I scale the average up by 10 as the number was a bit low to work with. Lastly, to make the frequency bands a little more Unity friendly, I created a matching-sized AudioBand array which represents the frequency bands as a number between 0 and 1 by dividing by the current max for that frequency band."
            />
            <Paragraph 
                content={<a href="https://github.com/dylanmpeck/Beat-Virus/blob/master/Assets/Scripts/AudioPeer.cs#L165">Code samples can be found in the GitHub repo.</a>}
            />
            <Paragraph
                content="After doing these calculations, I'm able to multiply the frequency band, audio band, or average of the entire audio band array (which gives me overall amplitude) with any parameter to get cool audio visualization effects. The results are seen in the game with the tunnel warping to the kick drums, the tunnel's colors shifting to the beat, and the enemies bouncing around to different frequency bands."
            />
            <Box 
                sx={{ padding: '1em', width: '100%'}}
                component='img'
                src={process.env.PUBLIC_URL + '/Tunnel.gif'}
            />
                        <Box 
                sx={{ padding: '1em', width: '100%'}}
                component='img'
                src={process.env.PUBLIC_URL + '/Ball.gif'}
            />
            <PageTitle name="Gameplay" variant='h3' align='left' />
            <Paragraph
                content="At this stage of development, the gameplay code is fairly simple. The player is placed in the center of the tunnel where germ-like spheres of different colors spawn in 4 different lanes about 20 meters away and float towards the player. The player points at the spheres with hands or controllers, also of different colors, and clicks/taps on spheres of matching colors to explode them."
            />
            <Paragraph
                content="Enemy sphere spawning is handled with an object pool, so I only create a handful at the beginning of play and destroy at the end of a session. After every two beats (quarter notes) of the song, my RhythmGenerator class makes a decision of what to spawn. Currently its spawn choices are nothing, one random colored ball placed in one of four lanes, two balls of both colors placed in two separate lanes, or a different sphere type which the player must drag. The weights of what the spawner is most likely to choose are affected by the amplitude of the music. On lower amplitudes, it's more likely to throw nothing while on higher amplitudes its more likely to spawn more spheres."
            />
            <Paragraph
                content="The explosion effect is done with a prefab of minispheres that in total match the size of the original, big sphere. When the sphere is shot, the minispheres become active, an explosion force is applied to them, they reset to original position after a certain amount of time, and then they are deactivated again."
            />
            <Paragraph
                content="The bulk of the controls/XR functionality is done with Mixed Reality Toolkit and Open XR components. While developing this game, I had the opportunity to try it out on a HoloLens 2, so I wanted all the code and controls to function on both a Windows Immersive VR Headset and the HoloLens 2. So, in most cases, I use MRTK's pointer interface and manipulation handler component because they automatically worked well enough with both devices. But, when I was scripting my own logic, I would check for hands using Microsoft's HandJointUtils first and then use controllers from the proper XR Node. Here's some sample code of me spawning projectile particles when you shoot in the correct hand or controller."
            />
            <Paragraph
                content="The score system is calculated based off the bpm of the song playing. The player will get a percentage of how many points the enemy sphere is worth based off how precise he or she shot it to the beat. If the player clicked close enough to the beat within a certain error margin, a combo multiplier to the previous points will rise up to x8. Missing a beat causes the combo to drop."
            />
        </Box>
    )
}

export default BeatVirus;