import {useState, useEffect} from 'react';
import axios from 'axios';

let responseObj = {
    "success": true,
    "terms": "https://coinlayer.com/terms",
    "privacy": "https://coinlayer.com/privacy",
    "timestamp": 1716152586,
    "target": "USD",
    "rates": {
        "611": 0.389165,
        "ABC": 59.99,
        "ACP": 0.014931,
        "ACT": 0.001894,
        "ACT*": 0.017178,
        "ADA": 0.466425,
        "ADCN": 0.00013,
        "ADL": 0.01515,
        "ADX": 0.194077,
        "ADZ": 0.0023,
        "AE": 0.038721,
        "AGI": 0.251,
        "AIB": 0.005626,
        "AIDOC": 0.004299,
        "AION": 0.00172,
        "AIR": 0.0058,
        "ALT": 0.602,
        "AMB": 0.009509,
        "AMM": 0.006795,
        "ANT": 7.86,
        "APC": 0.0017,
        "APPC": 0.000663,
        "ARC": 0.0169,
        "ARCT": 0.00061,
        "ARDR": 0.07,
        "ARK": 0.83776,
        "ARN": 0.000849,
        "ASAFE2": 0.4,
        "AST": 0.1419,
        "ATB": 0.017,
        "ATM": 2.0001,
        "AURS": 0.352867,
        "AVAX": 31.6,
        "AVT": 0.77,
        "BAR": 2.635,
        "BASH": 0.0056,
        "BAT": 0.236656,
        "BAY": 0.0644,
        "BBP": 0.0005,
        "BCD": 0.185003,
        "BCH": 484.609,
        "BCN": 0.000033471,
        "BCPT": 0.000925,
        "BEE": 0.000001,
        "BIO": 0.0008,
        "BLC": 0.072132,
        "BLOCK": 0.18,
        "BLU": 0.00054,
        "BLZ": 0.379399,
        "BMC": 0.002994,
        "BNB": 583.723565,
        "BNT": 0.755193,
        "BOST": 0.048,
        "BQ": 0.00007775,
        "BQX": 2.720931,
        "BRD": 0.0095,
        "BRIT": 0.03,
        "BT1": 0,
        "BT2": 0,
        "BTC": 66231.276857,
        "BTCA": 0.00036,
        "BTCS": 0.01201,
        "BTCZ": 0.00007955220733559222,
        "BTG": 35.21,
        "BTLC": 9,
        "BTM": 0.078282,
        "BTM*": 0.122609,
        "BTQ": 0.01,
        "BTS": 0.003203,
        "BTX": 0.059651,
        "BURST": 0.017348,
        "CALC": 0.0006,
        "CAS": 0.007,
        "CAT": 0.123206,
        "CCRB": 0.08888,
        "CDT": 0.408497,
        "CESC": 0.0037,
        "CHAT": 0.000116,
        "CJ": 0.000898,
        "CL": 0.028,
        "CLD": 0.02,
        "CLOAK": 10,
        "CMT*": 0.03954,
        "CND": 0.000367,
        "CNX": 1.996594,
        "CPC": 0.0005,
        "CRAVE": 0.4,
        "CRC": 0.08475,
        "CRE": 1.316485,
        "CRW": 0.02202,
        "CTO": 0.005,
        "CTR": 0.001059,
        "CVC": 0.157324,
        "DAS": 0.937816,
        "DASH": 28.666025,
        "DAT": 0.0013,
        "DATA": 0,
        "DBC": 0.003347,
        "DBET": 0.027656,
        "DCN": 0.0000013973,
        "DCR": 1.2117,
        "DCT": 0.061806,
        "DEEP": 0.001,
        "DENT": 0.001321,
        "DGB": 0.011225,
        "DGD": 673.134062,
        "DIM": 0.000094957,
        "DIME": 0.00003,
        "DMD": 0.58782,
        "DNT": 0.0732,
        "DOGE": 0.079325,
        "DRGN": 0.052648,
        "DRZ": 3,
        "DSH": 252.13175,
        "DTA": 0.000003249183188997307,
        "EC": 50,
        "EDG": 0.001666,
        "EDO": 0.61442,
        "EDR": 0.00023,
        "EKO": 0.00003182200027870286,
        "ELA": 2.905966,
        "ELF": 0.532219,
        "EMC": 0.006501,
        "EMGO": 0.43382,
        "ENG": 0.013456,
        "ENJ": 0.44,
        "EOS": 0.7867,
        "ERT": 0.2054,
        "ETC": 27.75,
        "ETH": 3079.123333,
        "ETN": 0.003766,
        "ETP": 0.027797,
        "ETT": 2.9,
        "EVR": 0.104931,
        "EVX": 0.006278,
        "FCT": 0.052073,
        "FLP": 0.011,
        "FOTA": 0.0003,
        "FRST": 0.78001,
        "FUEL": 22.054456,
        "FUN": 0.005134,
        "FUNC": 0.00061,
        "FUTC": 0.004,
        "GAME": 0.208857,
        "GAS": 5.060115,
        "GBYTE": 18.970142,
        "GMX": 54.5,
        "GNO": 281.31,
        "GNT": 9.997486735376329e-9,
        "GNX": 0.000956,
        "GRC": 0.0067,
        "GRS": 10,
        "GRWI": 10000,
        "GTC": 1.1481,
        "GTO": 0.074167,
        "GUP": 0.019572,
        "GVT": 7.548039,
        "GXS": 1.067152,
        "HAC": 0.030597,
        "HNC": 0,
        "HSR": 10.831507,
        "HST": 0.0027,
        "HVN": 0.03529,
        "ICN": 0.145164,
        "ICOS": 17,
        "ICX": 0.207948,
        "IGNIS": 0.004999,
        "ILC": 0.098703,
        "INK": 0.000802,
        "INS": 1.510709,
        "INSN": 0.0473,
        "INT": 0.000316,
        "IOP": 15.455555,
        "IOST": 0.00883,
        "ITC": 0.021405,
        "KCS": 5.33,
        "KICK": 0.000324,
        "KIN": 0.000017485,
        "KLC": 0.000703,
        "KMD": 0.394578,
        "KNC": 0.563174,
        "KRB": 6,
        "LA": 0.035615,
        "LEND": 2.863007,
        "LEO": 18.18,
        "LINDA": 0.000271,
        "LINK": 16.525415,
        "LOC": 0.17,
        "LOG": 0.060174,
        "LRC": 0.241,
        "LSK": 1.78736,
        "LTC": 82.512217,
        "LUN": 0.039776,
        "LUX": 0.00000209,
        "MAID": 0.493119,
        "MANA": 0.455698,
        "MCAP": 0.005398,
        "MCO": 0.844788,
        "MDA": 0.031292,
        "MDS": 0.000164,
        "MIOTA": 0.20588,
        "MKR": 2732.641,
        "MLN": 15.457,
        "MNX": 0.028649,
        "MOD": 0.266491,
        "MOIN": 0.033073,
        "MONA": 0.340414,
        "MTL": 1.790362,
        "MTN*": 0.009575,
        "MTX": 0.0007,
        "NAS": 0.008659,
        "NAV": 0.053267,
        "NBT": 0.002043,
        "NDC": 0.008989,
        "NEBL": 0.008531,
        "NEO": 15.01992,
        "NEU": 0.024194,
        "NEWB": 0.002604,
        "NGC": 0.045292,
        "NKC": 0.038763,
        "NLC2": 0.599935,
        "NMC": 5.867998,
        "NMR": 27.4497,
        "NULS": 0.636152,
        "NVC": 10,
        "NXT": 0.001,
        "OAX": 0.199385,
        "OBITS": 0.015,
        "OC": 0.000407,
        "OCN": 0.00004724555040519568,
        "ODN": 0.5,
        "OK": 0.00705,
        "OMG": 0.615673,
        "OMNI": 1.1,
        "ORE": 0,
        "ORME": 1.235715,
        "OST": 0.0003,
        "OTN": 0,
        "OTX": 0.023,
        "OXY": 0.0146,
        "PART": 3.951477,
        "PAY": 0.008456,
        "PBT": 40.217332,
        "PCS": 0.019961,
        "PIVX": 0.313348,
        "PIZZA": 0.001,
        "PLBT": 20,
        "PLR": 0.003003,
        "POE": 0.000006116229365516791,
        "POLY": 0.1246,
        "POSW": 0.48712,
        "POWR": 0.304916,
        "PPC": 0.573419,
        "PPT": 0.029373,
        "PPY": 5.45,
        "PRC": 0.00003,
        "PRES": 0.219998,
        "PRG": 1.580929,
        "PRL": 1.083226,
        "PRO": 2.4615,
        "PURA": 0.25,
        "PUT": 0,
        "QASH": 0.022927,
        "QAU": 0,
        "QSP": 0.001733,
        "QTUM": 4.193381,
        "QUN": 0.008318,
        "R": 0.01052,
        "RBIES": 1,
        "RCN": 0.001085,
        "RDD": 0.00008297913990362354,
        "RDN": 0,
        "RDN*": 0.324446,
        "REBL": 0.000785,
        "REE": 0.00001,
        "REP": 1.392249,
        "REQ": 0.126,
        "REV": 0.00004,
        "RGC": 0.001,
        "RHOC": 0.178417,
        "RIYA": 0.090025,
        "RKC": 5,
        "RLC": 3.353028,
        "RPX": 0.061017,
        "RUFF": 0.000346,
        "SALT": 0.768708,
        "SAN": 0.035226,
        "SBC": 7,
        "SC": 0.0074,
        "SENT": 0.001,
        "SHIFT": 0,
        "SIB": 5.177,
        "SMART": 0.0000383,
        "SMLY": 0.00006,
        "SMT*": 0.011226,
        "SNC": 0.05148,
        "SNGLS": 0.0000611940056463398,
        "SNM": 0.002536,
        "SNT": 0.036384,
        "SOL": 172.68645,
        "SPK": 0.0084,
        "SRN": 0.00005507460508170582,
        "STEEM": 0.274523,
        "STK": 0.06422,
        "STORJ": 0.522506,
        "STRAT": 0.63864,
        "STU": 0.00019,
        "STX": 2.4005,
        "SUB": 0.000135,
        "SUR": 0.01,
        "SWFTC": 0.000833,
        "SYS": 0.191777,
        "TAAS": 10,
        "TESLA": 0.019139,
        "THC": 0.003366,
        "THETA": 2.599153,
        "THS": 0.00171,
        "TIO": 0.085,
        "TKN": 0,
        "TKY": 0.000621,
        "TNB": 0.00002499371683844083,
        "TNT": 0.009154,
        "TOA": 0.002397,
        "TRC": 6.2,
        "TRIG": 6.444341,
        "TRST": 0.04799,
        "TRUMP": 0.055,
        "TRX": 0.122447,
        "UBQ": 0.006119,
        "UNO": 13.4,
        "UNRC": 0.00006,
        "UQC": 8,
        "USDT": 1.000051,
        "UTK": 0.104716,
        "UTT": 0.004001,
        "VEE": 0.003335,
        "VEN": 15.957768,
        "VERI": 23.736235,
        "VIA": 0.008567,
        "VIB": 0.08,
        "VIBE": 0.001498,
        "VOISE": 0.00018,
        "VOX": 0.19995,
        "VRS": 0.1375,
        "VTC": 0.057602,
        "VUC": 0.000099,
        "WABI": 0.0017,
        "WAVES": 2.44103,
        "WAX": 0.0492,
        "WC": 0.045,
        "WGR": 5129422099.441725,
        "WINGS": 0.000006119400564633981,
        "WLK": 0.0058,
        "WOP": 0.046453,
        "WPR": 0.04073,
        "WRC": 0.002299,
        "WTC": 0.010997,
        "XAUR": 0.10301,
        "XBP": 0.0027,
        "XBY": 0.2889,
        "XCP": 9.170534,
        "XCXT": 0.095658,
        "XDN": 0.000024852,
        "XEM": 0.037319,
        "XGB": 0.0015,
        "XHI": 0.001325,
        "XID": 0.010924,
        "XLM": 0.104564,
        "XMR": 134.759833,
        "XNC": 0.00018,
        "XRB": 20.542692,
        "XRP": 0.51125,
        "XTO": 0.324858,
        "XTZ": 0.886479,
        "XUC": 0.0006,
        "XVG": 0.005529,
        "XZC": 4.96985,
        "YEE": 0.000001999497347075266,
        "YOC": 0.00012,
        "YOYOW": 0.004893,
        "ZBC": 0.01006,
        "ZCL": 1.288269,
        "ZEC": 23.260833,
        "ZEN": 8.24323,
        "ZIL": 0.022325,
        "ZNY": 0.02,
        "ZRX": 0.567021,
        "ZSC": 0.000135
    }
}

function mockFetch(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let randVal = Math.random();
            if (randVal < 0.75){
                resolve(responseObj);
            }
            else{
                reject("Error");
            }
        }, 1000);
    });
}

function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        mockFetch()
        .then(data=>{
            setLoading(false);
            setError(null);
            setData(Object.entries(data.rates));
        })
        .catch(err=>{
            setLoading(false);
            setError(err);
        })
    }, [url]);

    return {loading, error, data};

}

export default useFetch;