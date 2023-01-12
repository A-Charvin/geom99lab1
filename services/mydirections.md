# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://YourDirectionsApiURLGoesHere](https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJrTF9CPptqDsRVgqHeuvWQvU&destination=place_id:ChIJtRyXL69ZqDsRgtI-GB7IwS8&avoid=tolls|highways|ferries&waypoints=optimize:true|place_id:ChIJM5rQ9oBvqDsRaGYCPyPrqbg|via:place_id:ChIJc15NlkRpqDsRaIaCbSCdRdc&wavepoint_order=[2,1,3]&region=in&key=AIzaSyDv3MGflguusDaLmV_-BUlmuoUI4EbM88w
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJrTF9CPptqDsRVgqHeuvWQvU",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJM5rQ9oBvqDsRaGYCPyPrqbg",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJc15NlkRpqDsRaIaCbSCdRdc",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJtRyXL69ZqDsRgtI-GB7IwS8",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 11.0173935,
               "lng" : 76.96180890000001
            },
            "southwest" : {
               "lat" : 10.7842901,
               "lng" : 76.6548044
            }
         },
         "copyrights" : "Map data ©2023",
         "legs" : [
            {
               "distance" : {
                  "text" : "14.2 km",
                  "value" : 14158
               },
               "duration" : {
                  "text" : "29 mins",
                  "value" : 1720
               },
               "end_address" : "Malampuzha-I, Kerala, India",
               "end_location" : {
                  "lat" : 10.8282611,
                  "lng" : 76.7369028
               },
               "start_address" : "Palakkad, Kerala, India",
               "start_location" : {
                  "lat" : 10.7867421,
                  "lng" : 76.6548044
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 196
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 10.7855815,
                        "lng" : 76.65615670000001
                     },
                     "html_instructions" : "Head \u003cb\u003esouth-east\u003c/b\u003e on \u003cb\u003eNH966\u003c/b\u003e towards \u003cb\u003eMalampuzha 100 Feet Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad - Kottekkad Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad - Malampuzha Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cxy`AoszrMh@m@lAyAnBgC"
                     },
                     "start_location" : {
                        "lat" : 10.7867421,
                        "lng" : 76.6548044
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.0 km",
                        "value" : 4001
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 411
                     },
                     "end_location" : {
                        "lat" : 10.8182132,
                        "lng" : 76.6648203
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMalampuzha 100 Feet Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad - Kottekkad Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad - Malampuzha Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Palakkad - Malampuzha Rd\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Prakash tea shop (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{py`A_|zrM[a@ACIUu@u@GE][a@]g@e@USIIUUUSaAeAs@m@s@o@eAgA_B}AoEeEc@a@k@a@GCWMgAe@EACCEEIGq@_@cGkDECkBgAEC{@m@UOuA}@_@Su@c@{@_@WOSKMGQIOGSIUIc@MOGQEMEA?KCOCOCSCOA_@C_@A{@EM?}@EiBIyAI{AGg@CK?A?E@G@SDMB[HUFQDUDc@Fo@JUF_@Fw@PUFWD]FYB[Bg@FMBeBNg@FqANy@Hm@Jo@Ls@L_@Li@TEBi@TOFQH[LQBUBk@DE?k@DYDy@FiANgAFq@FK?MAQCkC[mB]gEc@qBSWAYAMAa@CaBAW?[Aa@A]C}@KA?IAq@MUESEYEiAQcBYq@Iu@KoCUCAmCU_@CIAUCSCIEg@Si@Uk@S_@OgAc@EAwA[{@Se@Ae@Ag@?k@@k@E"
                     },
                     "start_location" : {
                        "lat" : 10.7855815,
                        "lng" : 76.65615670000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 3047
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 407
                     },
                     "end_location" : {
                        "lat" : 10.8273943,
                        "lng" : 76.68374419999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at SAHYA YOGA STUDIO onto \u003cb\u003ePalakkad Malampuzha SP Line Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Saji tea shop (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "y|_aAcr|rM[U[W_@[s@q@qAaAo@a@y@k@aBkAa@Yu@o@c@]_BqAUQA?AACIKUY}@Q_@GQ]i@MMOMGAMCWAU?W@s@FQASCaAGqAIu@Ge@Ci@AE?g@CUGMGIGIIw@mACCc@i@AAUq@IUK]Uu@Ia@G]?KBMBG^m@JUHa@?GFg@?GBo@?gAAMI_AGe@Gi@OqACKUwA]kBSoAKm@Io@QoASwAGs@KaBIMAACACCECMEMGKC_@EwBSQCg@M[Q}Au@gAm@gA]g@MMCc@Gk@KKCMCGEKG[]WYHE@ABC?A@A@C?C@WAq@?a@AUAOAKCQj@Sz@_@RMNIJQt@o@pAgAt@o@\\URUJQL]Jc@Lq@Ny@DWJ[Ni@NUDEHELGJELIRMTO@E@CBG?C@G?IAMG[CUAK"
                     },
                     "start_location" : {
                        "lat" : 10.8182132,
                        "lng" : 76.6648203
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1291
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 120
                     },
                     "end_location" : {
                        "lat" : 10.8216039,
                        "lng" : 76.693544
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Hotel Govardhana Samos (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "evaaAkh`sMfG{FdAcAn@k@~@kAJWJWJk@NiA?CL{BHs@Tg@Xe@`@k@HM|@{AZq@La@@KDSBm@@KBc@NoALs@@KFg@TiBFYV_@hAsA|@eAdB}BvAkB@?"
                     },
                     "start_location" : {
                        "lat" : 10.8273943,
                        "lng" : 76.68374419999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.7 km",
                        "value" : 4745
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 515
                     },
                     "end_location" : {
                        "lat" : 10.826861,
                        "lng" : 76.7299651
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eMalampuzha - Kava - Anakkallu Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by malampuzha Grama Panchayath (on the left in 3.8 km)\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "_r`aAsebsMJWHa@Bo@Ay@Ky@AQMqA[uBIIqAqA@eABo@HQ@CZw@X{@?q@?AJaA\\}@P]J_@?K@q@E_@G_@a@_AWUa@]Ws@Lk@P[DK`AC~@Bf@BRGJW?Y?_@?q@UcA]iAUm@CW?OACTq@VU`@I@ANAl@IZOHO@EDOCU?ASw@E_@?SBWPw@Zw@C_BCSFSRc@JU@iD^sA?c@PqADa@@c@?e@Ey@Sm@AEg@kBOy@Mm@JwABk@?A?g@_@yAIoAN_FPu@@yAEq@@cCSo@Uk@CgA?sBcA_A}BiBq@aAE_@\\kCB{C@sAy@gB_@mAUe@K{AVoABa@Du@R}@b@e@t@s@Te@Oe@KWM[Om@USw@Oe@k@kAsA_@a@o@Qe@QMYCGAi@PgAVsACYO[e@o@Wg@Ck@?{@Cu@@gABq@We@Es@GeAFq@?CBa@WOw@Ig@@]SMa@O_@MCQGq@S_@SCA_AMWCUFe@Wa@I_@Ig@MKCWGSMWi@G_@"
                     },
                     "start_location" : {
                        "lat" : 10.8216039,
                        "lng" : 76.693544
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 862
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 231
                     },
                     "end_location" : {
                        "lat" : 10.8283305,
                        "lng" : 76.73677139999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{raaAiiisMNe@Do@@s@?a@?EAo@AcAQ{@Ce@?CE[Ok@O{@AGSmAI]Ek@?QJKLKBGZm@Na@DMDK@QAKACCMGOEMAQAIAIASAOACAQAY?MAMAE?EEC?AIGMEIIIIAICKACACEACACAG@G?E?C?AACAECACCECIAICUAW?S?K?GAECGACEEICKCKAO?OAE?GAKEICGIEOAC"
                     },
                     "start_location" : {
                        "lat" : 10.826861,
                        "lng" : 76.7299651
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "16 m",
                        "value" : 16
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 10.8282611,
                        "lng" : 76.7369028
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Palakkad\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a|aaAysjsMLY"
                     },
                     "start_location" : {
                        "lat" : 10.8283305,
                        "lng" : 76.73677139999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "58.9 km",
                  "value" : 58902
               },
               "duration" : {
                  "text" : "1 hour 43 mins",
                  "value" : 6189
               },
               "end_address" : "Coimbatore, Tamil Nadu, India",
               "end_location" : {
                  "lat" : 11.0168248,
                  "lng" : 76.95581369999999
               },
               "start_address" : "Malampuzha-I, Kerala, India",
               "start_location" : {
                  "lat" : 10.8282611,
                  "lng" : 76.7369028
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "16 m",
                        "value" : 16
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 10.8283305,
                        "lng" : 76.73677139999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth-west\u003c/b\u003e",
                     "polyline" : {
                        "points" : "s{aaAstjsMMX"
                     },
                     "start_location" : {
                        "lat" : 10.8282611,
                        "lng" : 76.7369028
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 245
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 10.8270173,
                        "lng" : 76.7353602
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Palakkad",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a|aaAysjsM@BDNFHHBJDF@D?N@N?J@JBHBDD@BBF@D?F?J?R@VBT@HBHBD@BDBB@@@B?D?F?FAB@B@D@@B@BBJ@HHHHHLDHF?@DB?D"
                     },
                     "start_location" : {
                        "lat" : 10.8283305,
                        "lng" : 76.73677139999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 617
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 10.826861,
                        "lng" : 76.7299651
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "{saaA_kjsM@D@L?L@X@P@B@N@R@H@H@PDLFNBL@B@JAPEJELO`@[l@CFMJKJ?PDj@H\\RlA@FNz@Nj@DZ?BBd@Pz@@bA@n@?D?`@Ar@En@Od@"
                     },
                     "start_location" : {
                        "lat" : 10.8270173,
                        "lng" : 76.7353602
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.7 km",
                        "value" : 4745
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 485
                     },
                     "end_location" : {
                        "lat" : 10.8216039,
                        "lng" : 76.693544
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMalampuzha - Kava - Anakkallu Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by malampuzha Grama Panchayath (on the right in 950m)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{raaAiiisMF^Vh@RLVFJBf@L^H`@Hd@VTGVB~@LB@^Rp@RPFLBN^L`@\\Rf@Av@HVNC`@?BGp@FdADr@Vd@Cp@AfABt@?z@Bj@Vf@d@n@NZBXWrAQfA@h@BFLXd@Pn@P^`@jArAd@j@v@NTRNl@LZJVNd@Ud@u@r@c@d@S|@Et@C`@WnAJzATd@^lAx@fBArACzC]jCD^p@`A|BhBbA~@?rBBfATj@Rn@AbCDp@AxAQt@O~EHnA^xA?f@?@Cj@KvALl@Nx@f@jB@DRl@Dx@?d@Ab@E`@QpA?b@_@rAAhDKTSb@GRBRB~A[v@Qv@CV?RD^Rv@?@BTENADIN[Nm@HO@A@a@HWTUp@@B?NBVTl@\\hATbA?p@?^?XKVSFg@C_ACaABEJQZMj@Vr@`@\\VT`@~@F^D^Ap@?JK^Q\\]|@K`A?@?p@Yz@[v@ABIPCn@AdApApAHHZtBLpA@PJx@@x@Cn@I`@KV"
                     },
                     "start_location" : {
                        "lat" : 10.826861,
                        "lng" : 76.7299651
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.7 km",
                        "value" : 5668
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 546
                     },
                     "end_location" : {
                        "lat" : 10.7926959,
                        "lng" : 76.7285548
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMalampuzha Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo past the church (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "_r`aAsebsMp@cAXa@nAcBb@k@hAyA~@sAvAqBPWl@}@jB_EZq@FMx@cBBGb@_ARa@N]t@kB\\u@BG\\w@Zs@DKp@cBb@}@|@gBh@yA|@cCTo@hAuCn@aBN_@r@_Bb@_A?Ab@}@v@}Ax@eBNWjA{Bl@gAp@qAzCyFzCwFpBaELUj@kAjAeCz@eBFKjAsBv@oAJOzAyB|@uA`AuA|@sAx@iAnA}AdAyAV[b@g@|@eB~@uAr@iAv@yAL]^eADKf@}An@cBbA}Cx@qBz@aCt@_Cd@oBd@yBF[d@eCVyAJcAT_CDgABk@LaCHkAHgAFa@d@oAPWBC@ABAB?H?J?B?B@BBBBBBLh@@BPRPLTLTDX?J?T?r@A|BCZ?RAPAVGXIn@Sd@SPCDAPA\\?z@FbAFn@Db@FXFD@XFRFPHPHTDhBXRDb@Fb@BX@rB?`@?L@J@VFZHB@n@P|A\\`@H`Dt@"
                     },
                     "start_location" : {
                        "lat" : 10.8216039,
                        "lng" : 76.693544
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1680
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 170
                     },
                     "end_location" : {
                        "lat" : 10.7976953,
                        "lng" : 76.7430002
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at MHHR HOMEMADE FOODS\u003cdiv style=\"font-size:0.9em\"\u003ePass by Eye Vision Digital Studio &amp; Video (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k}z`Am`isMa@mCGc@QeAO}@EWc@{Bq@iDe@mCGWG_@]sA{@mCs@oBw@sBK[kA}CAAq@eBe@eAEM_@gASi@K]Uw@i@kBs@gCa@cBOs@EMc@eBWeAOo@EUCKGe@Is@Ge@G}@Go@QiAM{@"
                     },
                     "start_location" : {
                        "lat" : 10.7926959,
                        "lng" : 76.7285548
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2413
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 320
                     },
                     "end_location" : {
                        "lat" : 10.7973879,
                        "lng" : 76.7641122
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Tyre Land Tyre onto \u003cb\u003eKanjikode Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by ABHILASH R (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s|{`AwzksMLAPINGFGFKBMBc@JqA@[D[D_@Pu@RaARw@@EJc@BOFWLi@FW@IBUFo@De@@CL_C?C@]Cm@A[C_@Gq@KsACKKu@G]Ge@C[Eo@Cw@?EGi@Ea@KcAAMCOEc@EoAAs@?C?i@?}@E{@As@Ca@Eo@Aa@?_@?a@@[FiABg@@]Bg@@o@Cc@CWAUE]I_@Qw@Us@So@IYGS[cAGQSq@Qm@EKI[COCQIc@Cg@Ae@?C?G?k@@_A?m@B_@@[@UBWDQ?AHWX}@XcAXw@Pg@JWHOXo@\\_ABKZcADOBM?C@E?M@KAO?OAIAKEe@CYE]Go@Ea@AGGICECEEGGECACAMCA?"
                     },
                     "start_location" : {
                        "lat" : 10.7976953,
                        "lng" : 76.7430002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1703
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 10.7989325,
                        "lng" : 76.7794765
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNH544\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "uz{`Au~osMOCBOFw@Bc@@Y?M@g@Ao@C[?IEi@Gw@Ek@K}@Iy@CYEg@IaAG}@Ey@EeACgA?uA?gAA[Bo@BeBBqA@q@@mC@eCCmBE{AEw@G}@OiCY_CUwBQ}AKw@WoCa@yD[sBWcAGY"
                     },
                     "start_location" : {
                        "lat" : 10.7973879,
                        "lng" : 76.7641122
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3343
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 354
                     },
                     "end_location" : {
                        "lat" : 10.7851102,
                        "lng" : 76.8022843
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Alamaram Bus Stop onto \u003cb\u003eKanjikode - Menonpara Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVelanthavalam - Kuppandakondannoor Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Walayar Toll Skip Junction 1 (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "id|`Aw~rsMNENEj@MhA[NCLCNAN?j@C\\AD?r@Ed@EX@V?t@?P@XAT?PARE@?HETM~Aq@v@[pB_A\\Ud@_@vA_Bb@g@NQj@_A`@q@j@eAR[f@y@r@kAd@{@j@_AXWRIXGl@SXQ^g@^a@PORGl@Ol@OtA[n@U`@Sd@YFEFGHKlBuGf@kBDULs@FUFS`@q@h@_AJU@AP[`@o@pBkCDEpAqBHOFSZqAh@yBT}@DO`@yAr@iCFUNi@fCgGPa@J_@D[Fc@@c@?e@?KD}D?i@AMAMC]}@gE?Ao@sC_@_Ck@oDCU?GOuAImBAS?E?G?C@CBE?ABC@?BCFAHCZ?"
                     },
                     "start_location" : {
                        "lat" : 10.7989325,
                        "lng" : 76.7794765
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.4 km",
                        "value" : 5355
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 727
                     },
                     "end_location" : {
                        "lat" : 10.819548,
                        "lng" : 76.8095292
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Usha Sreerag house (on the right in 3.6 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}my`AgmwsMO{@E]AW@WBW@QJm@Ts@Z}AHc@H]Bg@@]?W?o@Aa@G]Qg@AAQ]Wi@[s@GWEUCYIs@Qw@KWIMKEMEi@KYCe@GeAGo@Ey@Ic@CKAy@Ey@Ck@C[EQCUEGCKC[KQKGCIIe@]YQ]Uu@m@IG]YCAUQKIKOEIESI_@Gi@Ei@CYGsACyAAeA?m@AIAKCUGOISMWQUUWMMIKISISESAEAEAMAU@[D_@@U@M?K?KCSEOCKIMKMSQOMUOKISSQW?CGOMYIYG[EYEi@Ec@E]CM?EGSGSCECKIOGKEGGKIIMKGGICOGSEQ?g@@]B]@k@FgAFk@Bk@F_ALs@HQBG@eFKy@Ea@CSCSCQCKCGAGCEA_Ai@]W[SOIKGQEQEMCMAOAW@g@Bc@BE?{@JaBFkAHC@o@Dq@DuAH{@Bm@Fy@Xk@Ls@V[Hw@R{@Tg@Ry@TiA\\cA\\aANgBL[@BbA@p@?NAL?FAJAFCDEDCBCBWPw@`@WJQFMFUJKH?@IFUR_@^y@t@mAhA_@Xk@h@e@b@C@WTkAhAOLMLSPeAdA{@z@KFIDE@A?E?GAKAMEs@UIC_A_@i@Qe@QICWK_@MOEKAG?G?K@O@cAVi@H_@Fo@Js@PeALE@KDc@JSD]FoATSDUDcALI@yCh@i@JsEv@i@HMBkBZYDc@@c@EmACe@CWBg@JaATsAVu@PKD"
                     },
                     "start_location" : {
                        "lat" : 10.7851102,
                        "lng" : 76.8022843
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 140
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 10.8190743,
                        "lng" : 76.8083408
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH544\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ee`aAqzxsMBJf@xAr@fC"
                     },
                     "start_location" : {
                        "lat" : 10.819548,
                        "lng" : 76.8095292
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "16.9 km",
                        "value" : 16899
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1018
                     },
                     "end_location" : {
                        "lat" : 10.8938914,
                        "lng" : 76.929025
                     },
                     "html_instructions" : "Make a \u003cb\u003eU-turn\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eParts of this road may be closed at certain times or on certain days\u003c/div\u003e",
                     "maneuver" : "uturn-right",
                     "polyline" : {
                        "points" : "eb`aAcsxsMSHa@yAw@iCWm@S_@a@q@k@{@U[k@y@gA_BaA_BIO}@_Ba@s@q@kACCs@kAEIU[SYGGOQe@i@CCw@m@u@k@AA}@m@y@m@UOMMaA{@SY[_@MQi@y@eAqBg@_As@_Ba@y@IWSk@Us@GSQaAOeAGe@AYAYGiBCkBCcAEqBGgCEaEAc@EwDGuDAqAGcA?EGk@I_@GQI]Um@g@kA[i@_AkA{@s@aAy@gDgC{AkAiA_A?Au@o@gA_A_Au@wAaA_Aw@aBcBOMk@k@UYQUo@cAaAgBuAyCi@aAq@oAo@mAs@uAe@}@e@y@QUOU_@g@c@e@MOo@g@}@m@EEc@W}@k@}CiBa@Sa@QWI]Kc@MeAWo@K{@QiAI}@Km@Cc@C[Ae@@}BDkHFi@?eDFeCAQ@g@@]?C?UAg@Ci@Cg@G]EqCq@YG}@[{CsA_@Q}E{B_By@eB{@s@]qAw@u@c@_@S[Uc@]MKw@k@a@Y_@Ym@g@SO]YMMKGeAw@OKOK_@[UWY]UYU_@Ua@O]O_@Qa@GWI]Kc@Mm@Im@Gm@KiAu@mJAUC[a@}EEu@?u@@m@Dk@Hm@NcA`@eBPu@\\sAr@kD`@iBXiAFWDULe@d@qBRaAFi@Fw@B_AAu@?ACg@Ee@Ge@GYESI[So@]{@g@eAk@iAO[y@oBm@sAa@{@o@oAYm@y@iBeAyBq@sAGMMU{BmEkB{Ds@sAi@aAWk@m@oAe@_Ak@mASa@aB}DWi@yE_KiE{IgBqDo@wAISgBeEqBcFMY}AwDuAcDk@sA]{@Se@Sa@Wg@}AcDm@uAgAyBaAkBGQsAuCkB}DuDkIIOmBqEIQi@cAm@sAuAwC_EkHgAsB{@eBe@iAKa@ESGYKy@Ei@Eq@Ak@?I@{@Be@@g@@W@YDcBBg@@c@\\qK@QNcDDiABc@FgA@W@UBiA@EA]?iAAk@AyAMiBUwB?CUwAe@aCKYa@wAi@eBGKu@aBWa@a@w@o@aA[g@_AiAk@s@q@q@kAeAIG}@o@aBiA_CmAeB_AgIkE{HeEcIkEeCsA]S_@SmAo@]O]QiAu@KKo@i@cB{Bc@i@mA_CACCEsAeCgC{Fc@aAqAyCgFoLEIMYQ]AAWg@S[c@y@_@s@eBaDU_@iAcBkBmC{AoBU[u@eAg@o@MQGIm@w@qAiBuCgEo@aAk@oAQe@K[EUIa@EUAEGq@Eg@Ao@EmB?yBEwAGcAM_ACQ]kB"
                     },
                     "start_location" : {
                        "lat" : 10.8190743,
                        "lng" : 76.8083408
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 559
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 81
                     },
                     "end_location" : {
                        "lat" : 10.8951203,
                        "lng" : 76.9339002
                     },
                     "html_instructions" : "Exit onto \u003cb\u003ePalakkad - Coimbatore Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad Main Rd\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "yunaAkeptMOQIIKIKKIUg@uBw@}CKg@G_@SgACSCWGk@Ee@AQAQGy@C]Cs@?MCuACqA"
                     },
                     "start_location" : {
                        "lat" : 10.8938914,
                        "lng" : 76.929025
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1097
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 10.9017202,
                        "lng" : 76.9407238
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003ePalakkad - Coimbatore Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad Main Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "o}naA{cqtMEUCEACAAAAA?AACAEAaBDG@G?IAE?EACACACAECCAECCCCCECCEOUCGCGQa@S_@ISCCQc@Sc@Ys@AGSe@EO?AGSACO]k@eBa@qAQg@O]KOKOIKII_@[KI[Ui@_@g@[QIo@a@[UWSGE[WoAgA][gBkAc@[KIk@e@?Aa@[o@i@i@c@SQ"
                     },
                     "start_location" : {
                        "lat" : 10.8951203,
                        "lng" : 76.9339002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1778
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 10.9144202,
                        "lng" : 76.948538
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003ePalakkad - Coimbatore Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad Main Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo past the petrol station (on the right in 1.5 km)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wfpaAonrtMSQ{@w@CCQKqAsA}AyB{@wAcCqE]o@i@cAEIe@y@MUMOMQOMUOWMOIeAk@gBcAmA_Am@a@MIwBcBWSYUWSm@i@EEyAmASOYS]SUOWOu@c@UMOISKi@OYIOEOCYIKAIAKCG?WCUC_DCaABQ@O@wCNqEVO@cBF"
                     },
                     "start_location" : {
                        "lat" : 10.9017202,
                        "lng" : 76.9407238
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.1 km",
                        "value" : 7063
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 814
                     },
                     "end_location" : {
                        "lat" : 10.9745958,
                        "lng" : 76.9614229
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003ePalakkad - Coimbatore Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePalakkad Main Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by KJ Hospital (on the left in 6.4 km)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "cvraAk_ttMSBgBF{AFM@M?q@BaABW?}@Bs@@g@?g@?C?_@AUA]Ca@Em@EaAK{@KmFa@gAIgAIc@CmAK_@CYAo@E_@Aa@Aa@AWAa@?eGC_@AkBEQ?qF]cAGgAI[C]Cw@Cc@CiBGe@CiBGYAqAEk@CG?gACw@As@CgBCa@?sA?a@?u@?qA?m@@c@AE?]AKAOAQEMC_@MiA]{@WgBi@uBk@{Ae@GC{Bs@SI}@WWGWEo@IiBWi@Kk@MaASqASu@OUCGAmASu@KgBWiBWsAOgC_@u@Mu@I}@MQEEAeAK[EUCm@GGAwCUgCQg@CoBOy@G}BOe@Cs@G{@GgAIwAKmACmAEaBCiCAmA?qB@k@?kA?C?i@@eA?i@?i@?KAy@AeAAcBCuAGoACIAkDWkAI[CwAKuAK}@Iw@IyAMgAQyAQgAM}@Ii@GG?UE{AQ}ASgAMq@GgAKiAKOAMA]CeAGy@IyBOC?}@I_@CmAMy@Ke@G_@Eu@IcAMKAmCUg@Ey@GkBOc@EyAOw@IsAMsAIo@KQCQGKCGCc@WAA[Wa@c@WYe@g@kAsAEG_CiCII}@aA]_@o@k@g@_@KEuAm@SMGES]MWSi@i@eB}@yCQo@"
                     },
                     "start_location" : {
                        "lat" : 10.9144202,
                        "lng" : 76.948538
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 521
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 110
                     },
                     "end_location" : {
                        "lat" : 10.9785873,
                        "lng" : 76.9601622
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH948\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by L&amp;T Toll Booth (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gn~aA{ovtMGKGKGKIGg@WiBIG?EAE?I?M@QBg@DYHm@Jk@VA?_@R[RGDGDUT_@^Y`@KPk@r@QROJMDODUDWBo@F[@"
                     },
                     "start_location" : {
                        "lat" : 10.9745958,
                        "lng" : 76.9614229
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2522
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 429
                     },
                     "end_location" : {
                        "lat" : 11.000426,
                        "lng" : 76.95826719999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003ePalakkad - Coimbatore Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH948\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Palakkad - Coimbatore Rd\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the lake (on the left)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "eg_bA_hvtMS@A?QAICYKQISOYUq@i@WUGEOG_@I_AMEAYEmAKaAGiCOgCMq@Ek@Ac@Cu@ES?c@@m@A{@Am@?_@CG?Y?Y?OBWBWDWFK@OBMA_@Em@Ie@?YBE?M@k@Bc@Du@FaAF}@F_@Da@FQ@Y?A?G?O@S?K?E@C@A@CBGFEDCBE@C?A?GACACAECCE][sBHUHoAn@{Aj@k@PQB_AXk@Js@N}AXMB]FWDeAPaBV{Fp@yATA?uGz@A?sDf@yBVI@o@HeBT]BsG|@O@E?"
                     },
                     "start_location" : {
                        "lat" : 10.9785873,
                        "lng" : 76.9601622
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 147
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 11.0002286,
                        "lng" : 76.95693489999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e after United Bank of India (on the left)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uocbAe|utMD\\`@lF"
                     },
                     "start_location" : {
                        "lat" : 11.000426,
                        "lng" : 76.95826719999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 147
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 11.0015066,
                        "lng" : 76.95658159999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMettupalayam Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRangai Gounder St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mncbAysutMqAP{@LWH{@N]J"
                     },
                     "start_location" : {
                        "lat" : 11.0002286,
                        "lng" : 76.95693489999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1801
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 360
                     },
                     "end_location" : {
                        "lat" : 11.0173935,
                        "lng" : 76.9538426
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eMettupalayam Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRangai Gounder St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Mettupalayam Rd/\u003cwbr/\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sri Karpaka Venayakar Temple (on the right in 500m)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "mvcbAsqutMwCp@OD{Bd@C@SBsAJC@YH}@Dy@Fg@Ds@DY@w@FiBN]BqAL}@Fs@DcBDO@eDJsD`@gAL{@Jo@FmAHeADa@@qABiBFc@@iADA?wBFQ?O?u@@qAB_BH_@Bu@FmARSDoA^IBcAXg@N}@Pa@Hm@L[Hy@T"
                     },
                     "start_location" : {
                        "lat" : 11.0015066,
                        "lng" : 76.95658159999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "75 m",
                        "value" : 75
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 11.0174078,
                        "lng" : 76.95320649999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e  onto the slip road to \u003cb\u003eNH181\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "uyfbAo`utMMRELCN?F?H@JPl@"
                     },
                     "start_location" : {
                        "lat" : 11.0173935,
                        "lng" : 76.9538426
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 368
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 11.0168248,
                        "lng" : 76.95581369999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNH181\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yyfbAq|ttMHHHFLDH@H@L@NCLCNGLMDGDIBM@G?_@Cc@Cg@AO?QAQAg@Cc@GuBCi@Ac@?M?I@G@O"
                     },
                     "start_location" : {
                        "lat" : 11.0174078,
                        "lng" : 76.95320649999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 10.7975843,
                        "lng" : 76.74303759999999
                     },
                     "step_index" : 6,
                     "step_interpolation" : 0.005420427052194701
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "cxy`AoszrMvBgCrAiDiAuAuFmFuPqOoLsGwPmJwMoAmGKqE|@gSnCkFjBcHp@gRsAiJa@wXcD{EqAuJiBoCq@uEqDoKcIqBiE_DKeIe@_EaDuAiFdAsDk@sJkCmQaAiC_LeDoFqAm@oACeDzGgFrBmBv@mDzAmC`AeAMiAzJwJbBgD\\iElEkJp@mGd@kDdGwHnBeDKuDi@gE{A{APkC|BeJK}BsBgDfBwAfCWmAoIlAuA~@Ml@u@]oBdAgIfAuNcAyEMkFi@sE\\aLk@gHcAsDoDkD\\{K{BwHt@eFxAyADkA_AuBiEqDgBeAb@_FqA_D@kF]qEkA_AcBsAqBs@aGeAoAcANiD_@}Gy@eHhA{C[iBcAeDcAq@MgBuASc@c@pAf@n@h@PjBpA|@p@tDFfB}@bBBfBpA~HKdI~E|BbF~@nDrCZ|LpA~Cc@~EpHvF~@tBEjAyAxAu@dFzBvH]zKnDjDbArDj@fH]`Lv@~LbAxEY|DaAbNq@zC\\nBmBbAmAtAv@~CTnDgCVgBvArBfDJ|BgA|DgArHzAzAh@fEJtDUx@jAeB|F}HdJsPxEuKnS_f@z_@is@hMeQdImPrJ{Z`CeVvAyEv@v@lCx@tIo@|GEjDz@bKn@tKdCmEaWmHwTwKy^eAyIx@uCpC}PLuH}@wI}@qSF_Ie@_HmDgOLkGzBeHjBqFG{Bi@gDq@i@s@kSQwd@cC}W}AkKtCu@`EU`FE|I}D~HmKlDaGtB}@pHoD~BiAfDuK|B}FjHeMzHsVr@uKuCaQs@mMTwDvA_JsDuNcQ}A_IwFo@uKy@kDkAyBF{CoDyFeBiH{C_@oJx@oKc@kDoB_Rj@sK~BoFdBiD\\WdA?vAM^eDbB_N~LmDnCqFiB_C]iI|Aw[jFcL`ArArFeCgGmHcLoFeJaN_MaH}NaAkMi@c^iB_I{_@w\\oRm\\wLoHsKoBwa@DiUeIaNwHmMoK{B{FiCqYnAsMnEyRZiJeDkJiWai@of@agA_\\es@cPa\\e@uH~Aed@g@yMiFaQaJ_Lsm@y\\mIeF{MsVmKqUgNmTyL}PiBwGm@mPyDgM_BiSgDScCaEuFwNwPaM{E_EcD{C{HsMeD}EwMwIkNkJ}Be@{Sb@yUj@}[_Ccd@{Aw[a@uWiHq\\gFi^qDad@eAy`@_Bw]wDiZmCkPuAiDqAyJwKgGqEsDuKgEi@kF~AiD|D{Dl@wBaAaFmByQcA_LTcPd@oB\\QMqCQeBx@yEzAkEx@kYzDaWbDPlGaFx@qL|Bya@rCw\\tAaUfEDfCfBBVaDWcIBo@"
         },
         "summary" : "Palakkad - Malampuzha Rd and Malampuzha - Kava - Anakkallu Rd",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
