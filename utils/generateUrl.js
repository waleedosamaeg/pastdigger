const generateUrl = ({options})=>{

    const url = process.env.FETCHING_URL || "https://web.archive.org/cdx/search/cdx"
    const domain=options?.domain  || "example.com"
    let subdomain=options?.subdomain || "*"
    subdomain = subdomain.split(",")
    
    let hosts = []
    for (let x of subdomain) { 
        hosts.push(`${x}.${domain}`)
    }

    let fetching_url = ""
    fetching_url +=url 
    fetching_url +="/" + "?url="
    for (let host of hosts) { 
        fetching_url += `${host}/*` 
        hosts.indexOf(host) !== hosts.length -1  ? fetching_url += "&url=": null
    }



    
    
    fetching_url += "&" + `collapse=urlkey` + "&"
    fetching_url += "fl=original,timestamp"
    fetching_url += "&output=json"
    fetching_url +="&sort=reverse"

    return fetching_url

}
export default generateUrl;