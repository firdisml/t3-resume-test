import React from 'react'
import { Document, Page, Text, View, Font, StyleSheet, Svg, Path, Image } from '@react-pdf/renderer';


Font.register({
    family: 'Karla',
    src: 'http://fonts.gstatic.com/s/karla/v5/Vu9Dx8oyiuqEkuIyR3OPDQ.ttf'
});


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    header_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contact_div: {
        fontSize: 11,
        textAlign: 'left',
        width: 400,
        fontFamily: 'Karla',
    },
    profile_div: {
        marginTop: 25,
        fontFamily: 'Karla',
    },
    experience_div: {
        marginTop: 10,
        fontFamily: 'Karla',
    },
    experience_content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        fontFamily: 'Karla',
    },
    experience_content_description: {
        width: '72%',
    },
    experience_content_description_title: {
        fontSize: 13,
    },
    section_title: {
        fontSize: 13,
        textAlign: 'left',
    },
    section_content: {
        fontSize: 12,
        textAlign: 'left',
        lineHeight: 1.6,
        color: "#3b444b",
    },
    title: {
        fontSize: 24,
        textAlign: 'left',
        fontFamily: 'Karla'
    },
    contact_children: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        textAlign: 'left',
        fontFamily: 'Karla'
    },
    icon: {
        marginRight: 7,
    },
    author: {
        fontSize: 12,
        marginTop: 12,
        textAlign: 'left',
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});


function PDFFile(props) {
    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.header_div}>
                    <View style={styles.contact_div}>
                        <View>
                            <Text style={styles.title}>MOHAMAD FIRDAUS FITRI BIN ISMAIL</Text>
                        </View>
                        <View style={styles.contact_children}>
                            <Svg style={styles.icon} stroke='curentColor'
                                fill='#FFF'
                                strokeWidth="1.5"
                                viewBox='0 0 24 24'
                                height='15'
                                width='15'><Path d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' /></Svg>
                            <Text>Icon Residence Mont Kiara, Persiaran Dutamas, Dutamas, 50480 Kuala Lumpur, Malaysia</Text>
                        </View>
                        <View style={styles.contact_children}>
                            <Svg style={styles.icon} stroke='curentColor'
                                fill='#FFF'
                                strokeWidth="1.5"
                                viewBox='0 0 24 24'
                                height='15'
                                width='15'><Path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' /></Svg>
                            <Text>firdausfitri010199@gmail.com</Text>
                        </View>
                        <View style={styles.contact_children}>
                            <Svg style={styles.icon} stroke='curentColor'
                                fill='#FFF'
                                strokeWidth="1.5"
                                viewBox='0 0 24 24'
                                height='15'
                                width='15'><Path d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' /></Svg>
                            <Text>011-11796358</Text>
                        </View>
                        <View style={styles.contact_children}>
                            <Svg style={styles.icon} stroke='curentColor'
                                fill='#FFF'
                                strokeWidth="1.5"
                                viewBox='0 0 24 24'
                                height='15'
                                width='15'><Path d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' /></Svg>
                            <Text>https://www.linkedin.com/in/firdismail</Text>
                        </View>
                        <View style={styles.contact_children}>
                            <Svg style={styles.icon} stroke='curentColor'
                                fill='#FFF'
                                strokeWidth="1.5"
                                viewBox='0 0 24 24'
                                height='15'
                                width='15'><Path d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' /></Svg>
                            <Text>https://github.com/firdisml</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '10px',
                        }} src={'https://media.licdn.com/dms/image/C5603AQHgyGTk6fiOlA/profile-displayphoto-shrink_800_800/0/1655569533803?e=1679529600&v=beta&t=Yc_1ljlP7FgwCTGreUijgXoi4PCRqkY0zAw4pPHYEqc'} />\
                    </View>
                </View>
                <View style={styles.profile_div}>
                    <Text style={styles.section_title}>Profile</Text>
                    <View
                        style={{
                            height: '1.5px',
                            marginTop: '3px',
                            marginBottom: '8px',
                            width: '100%',
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <Text style={styles.section_content}>Hey there my name Firdaus! A large portion of my time is devoted to the creation of something I find fascinating. Among the many skills I have, web development is where I really shine. Although my strongest suit is web development, I am also proficient in other areas.

                    </Text>
                </View>
                <View style={styles.experience_div}>
                    <Text style={styles.section_title}>Professional Experience</Text>
                    <View
                        style={{
                            height: '1.5px',
                            marginTop: '3px',
                            marginBottom: '8px',
                            width: '100%',
                            backgroundColor: 'black',
                        }}
                    ></View>
                    
                    <View style={styles.section_content}>
                    {props.experiences ? props.experiences.map((experience) => (<><View style={styles.experience_content}>
                            <View>
                                <Text>01/2020 – 12/2020</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>{experience.title}, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>{experience.employer}</Text>
                                </View>
                                <View>
                                    {experience.description ? experience.description.map((experience) => (<>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}>•</Text>
                                        <Text>{experience}</Text>
                                    </View></>)) : null}
                                </View>
                            </View>
                        </View></>)) : null}
                    </View>
                </View>
                <View style={styles.experience_div}>
                    <Text style={styles.section_title}>Projects</Text>
                    <View
                        style={{
                            height: '1.5px',
                            marginTop: '3px',
                            marginBottom: '8px',
                            width: '100%',
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <View style={styles.section_content}>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>01/2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Raizzen, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>Decentralized Application</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}></Text>
                                        <Text>Build a dashboard where customers can check the status of their orders, their token balances, their rewards, and any new updates to the project using NextJS, ChakraUI & Firestore Database</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>08/2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Mereka Connect, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>Creative Space Platform</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}></Text>
                                        <Text>Digital ecosystem that connects knowledge seekers from all backgrounds with creative hubs all around the world.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>08/2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Mereka Resources, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>Creative Space Platform</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}></Text>
                                        <Text>A companion website where all resources that is related to main platform are stored and displayed.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>01/2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Raizzen, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>Non-Fungible Token Collection</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}></Text>
                                        <Text>Raizzen is a decentralized community-owned NFT project stored in the Binance Smart Chain network.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>01/2021</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Persona Daiana, </Text>
                                    <Text style={{ color: '#3b444b', fontSize: 13 }}>Non-Fungible Token Collection</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                                        <Text style={{ marginHorizontal: 5 }}></Text>
                                        <Text>Persona Daiana is a decentralized community-owned NFT project stored in the Binance Smart Chain network.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.experience_div}>
                    <Text style={styles.section_title}>Education</Text>
                    <View
                        style={{
                            height: '1.5px',
                            marginTop: '3px',
                            marginBottom: '8px',
                            width: '100%',
                            backgroundColor: 'black',
                        }}
                    ></View>
                     <View style={styles.section_content}>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>2018 – 2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Universiti Kuala Lumpur, Malaysia Institute Information Technology (MIIT), <Text style={{ color: '#3b444b', fontSize: 13 }}>Bachelor's Degree, Software Engineering</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>2016 – 2018</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Universiti Kuala Lumpur, Malaysia Institute Information Technology (MIIT), <Text style={{ color: '#3b444b', fontSize: 13 }}>Diploma in Multimedia</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.experience_content}>
                            <View>
                                <Text>2018 – 2022</Text>
                            </View>
                            <View style={styles.experience_content_description}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>Sekolah Menengah Kebangsaan Clifford, <Text style={{ color: '#3b444b', fontSize: 13 }}>Sijil Pelajaran Malaysia</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default PDFFile
