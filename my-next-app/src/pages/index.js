import Head from "next/head";
import Home from "@/components/header";
import Countdown from "@/components/countdown";
import Important from "@/components/important"; 
import Map from "@/components/map"; 
import Form from "@/components/form";
import Footer from "@/components/footer";

const OnePageWeb = () => { 
    



    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>One Page Website</title>
            </Head>
            <Home />
            <Countdown />
            <Important /> 
            <Map />
            <Form />
            <Footer />
        </div>
    );

    
}

export default OnePageWeb; 