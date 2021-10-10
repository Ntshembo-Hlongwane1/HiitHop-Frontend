import BannerImage from '../Assets/banner.jpg';

const Banner = () => {
  return (
    <div style={styles.container}>
      <img style={{ width:'100%', height:'75vh', objectFit:'cover'}} src={BannerImage} alt='Home banner'/>
      <div style={{position:'absolute', top:'60%', left:'50%', transform:'translate(-50%, -50%)', textAlign:'center'}}>
        <h3 style={{fontSize:'1.5rem'}}>WELCOME TO HIIT HOP</h3>
        <p>HARDCORE FUN THAT WILL CHANGE YOUR BOD</p>
      </div>
    </div>
  )
}

const styles = {
  image:{
    width:'100%',
    height:'75vh',
    objectFit:'cover',
  },
  container:{
    padding:'1rem'
  },
  textContainer:{
    position:'absolute',
    top:'60%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    textAlign:'center'
  },
  textHeader:{
    fontSize:'1.5rem'
  }
}

export default Banner
