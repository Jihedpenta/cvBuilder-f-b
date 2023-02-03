
export const getColor = (industry)=>{
    const primary_color = industry === 'energy' ?
    '#CC3333 ' :
     industry === 'telecom' ?
        '#723893' :
         industry === 'transport' ?
            '#009966' :
             industry === 'oilgas' ?
                '#D69B18' :
                '#245097'
            return primary_color;
}

export const getLogoUrl = (industry)=> {
    const logo_folder = '/images/pentabell_logos/';
    const logo_link = industry === 'energy' ?
        logo_folder + 'energy.png' :
        industry === 'telecom' ?
            logo_folder + 'telecom.png' :
            industry === 'transport' ?
                logo_folder + 'transport.png' :
                industry === 'oilgas' ?
                    logo_folder + 'oilgas.png' :
                    logo_folder + 'other.png'
    return logo_link;
}

export const contentHeightTotal = (array)=>{
    let total = 0;
    array.forEach((elem)=>{
        if (elem.current)
        total += elem.current.offsetHeight
    })
    return total
}

