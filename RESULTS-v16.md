## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|713,283,080|96|
|Using dot notation|707,542,860|95|
|Using define property (writable)|3,076,464|98|
|Using define property initialized (writable)|3,734,601|95|
|Using define property (getter)|1,536,237|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":713283079.6197867,"samples":8},{"name":"Using dot notation","opsSec":707542860.3084638,"samples":8},{"name":"Using define property (writable)","opsSec":3076464.3946698313,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3734601.4194992417,"samples":4},{"name":"Using define property (getter)","opsSec":1536236.6467177353,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.131ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.538ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|47.997ms
new Array(length)|1,000,000|7.646ms
array.push|100,000,000|2,067.147ms
new Array(length)|100,000,000|5,679.762ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.084ms
new Array(length)|100|0.013ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.703ms
new Array(length)|10,000|5.089ms
array.push|1,000,000|385.023ms
new Array(length)|1,000,000|7ms
array.push|100,000,000|2,981.636ms
new Array(length)|100,000,000|6,309.026ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|82|
|Array.from|12|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":271.5060177100338,"samples":3},{"name":"Array.from","opsSec":11.737238417929294,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,141|86|
|new Blob (1024)|417|71|
|text (128)|25,880|82|
|text (1024)|17,022|74|
|arrayBuffer (128)|31,655|88|
|arrayBuffer (1024)|20,111|88|
|slice (0, 64)|66,711|80|
|slice (0, 512)|33,436|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3140.6555558755676,"samples":4},{"name":"new Blob (1024)","opsSec":416.7626701926918,"samples":2},{"name":"text (128)","opsSec":25880.48897899092,"samples":4},{"name":"text (1024)","opsSec":17021.63439217799,"samples":3},{"name":"arrayBuffer (128)","opsSec":31654.791214231278,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20110.53845452326,"samples":3},{"name":"slice (0, 64)","opsSec":66711.38966037962,"samples":4},{"name":"slice (0, 512)","opsSec":33436.16728876442,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,972|53|
|[True conditional] Using constructor name|133,493|95|
|[True conditional] Check if property is valid then instanceof |136,027|92|
|[False conditional] Using instanceof only|594,588,611|98|
|[False conditional] Using constructor name|593,934,056|97|
|[False conditional] Check if property is valid then instanceof |594,722,137|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":171972.45633303712,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133493.46654221704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":136027.18949308738,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":594588610.5286802,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":593934055.9988905,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":594722137.3280324,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,437|92|
|crypto.verify('RSA-SHA256')|20,641|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":21436.759489327713,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":20641.1127505573,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,640,623|91|
|fromUnixToISOString(new Date())|1,420,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1640622.5192633655,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1420634.9212216632,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,713|84|
|Intl.DateTimeFormat().format(new Date())|8,710|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,149|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,992|76|
|Reusing Intl.DateTimeFormat()|422,277|97|
|Date.toLocaleDateString()|423,355|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,175|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8712.859097031851,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8710.313802791254,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10149.132105762517,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8992.277568939322,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":422277.28255833144,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":423354.68888506765,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11174.946354381002,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|726,483|96|
|Using brackets {}|722,091|96|
|Using '' + |734,986|99|
|Using date.toString()|801,831|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":726483.1614743251,"cycles":6,"stats":{"deviation":1.1647796241785474e-8,"mean":0.0000013764943952322306,"moe":2.330044522656361e-9,"rme":0.16927381111953277,"sem":1.1887982258450822e-9,"variance":1.3567115729015181e-16}},{"name":"Using brackets {}","hz":722091.3587236389,"cycles":4,"stats":{"deviation":1.9549384341895934e-8,"mean":0.0000013848663163170786,"moe":3.910691341228013e-9,"rme":0.28238764241361053,"sem":1.995250684300007e-9,"variance":3.8217842814716587e-16}},{"name":"Using '' + ","hz":734985.5967264445,"cycles":6,"stats":{"deviation":7.143367957209569e-9,"mean":0.000001360570879829352,"moe":1.4071535653600871e-9,"rme":0.10342376029219276,"sem":7.179354925306567e-10,"variance":5.1027705772088417e-17}},{"name":"Using date.toString()","hz":801831.0030171529,"cycles":3,"stats":{"deviation":1.4667868306270152e-8,"mean":0.000001247145590825462,"moe":3.0304129881243803e-9,"rme":0.24298790858239794,"sem":1.5461290755736634e-9,"variance":2.151463606500844e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,405,137|96|
|Using delete property (proto: null)|11,988,347|93|
|Using delete property (cached proto: null)|2,394,105|98|
|Using undefined assignment|708,817,861|96|
|Using undefined assignment (proto: null)|14,785,389|94|
|Using undefined property (cached proto: null)|710,928,356|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2405137.4149310873,"cycles":5,"stats":{"deviation":8.284371924440483e-9,"mean":4.157766594923028e-7,"moe":1.6572195311026288e-9,"rme":0.39858406990094847,"sem":8.455201689299127e-10,"variance":6.863081818245773e-17}},{"name":"Using delete property (proto: null)","hz":11988347.133411113,"cycles":5,"stats":{"deviation":8.154549574074419e-9,"mean":8.341433467613181e-8,"moe":1.6573513041175484e-9,"rme":1.9868902755772782,"sem":8.455874000599737e-10,"variance":6.649667875603728e-17}},{"name":"Using delete property (cached proto: null)","hz":2394104.7557352157,"cycles":5,"stats":{"deviation":1.873796021074917e-8,"mean":4.176926667909758e-7,"moe":3.7099268445748446e-9,"rme":0.8881953502026378,"sem":1.892819818660635e-9,"variance":3.51111152859619e-16}},{"name":"Using undefined assignment","hz":708817861.3501139,"cycles":6,"stats":{"deviation":7.530162681920767e-11,"mean":1.410799663111282e-9,"moe":1.5063462604863763e-11,"rme":1.0677251348106949,"sem":7.685440104522328e-12,"variance":5.6703350016192166e-21}},{"name":"Using undefined assignment (proto: null)","hz":14785388.543623684,"cycles":6,"stats":{"deviation":1.6988773682041666e-9,"mean":6.76343402846358e-8,"moe":3.434426096213841e-10,"rme":0.5077932425688234,"sem":1.7522582123540005e-10,"variance":2.8861843121963153e-18}},{"name":"Using undefined property (cached proto: null)","hz":710928356.2830963,"cycles":7,"stats":{"deviation":8.696837761081457e-12,"mean":1.4066114977158028e-9,"moe":1.7581402354408536e-12,"rme":0.1249911747697142,"sem":8.970103242045171e-13,"variance":7.563498704257233e-23}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|187,155|59|
|NodeError|152,606|95|
|NodeError Range|152,401|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":187155.42942670142,"cycles":4,"stats":{"deviation":0.0000010281372961452974,"mean":0.000005343152496634598,"moe":2.6235006685089313e-7,"rme":4.910023942160273,"sem":1.3385207492392507e-7,"variance":1.057066299724963e-12}},{"name":"NodeError","hz":152606.4269555789,"cycles":3,"stats":{"deviation":2.603112043741058e-7,"mean":0.00000655280396736556,"moe":5.2346437456637184e-8,"rme":0.7988402784111082,"sem":2.6707366049304686e-8,"variance":6.776192312269749e-14}},{"name":"NodeError Range","hz":152400.59244534106,"cycles":3,"stats":{"deviation":1.8851922419410757e-7,"mean":0.000006561654282011096,"moe":3.751680518253261e-8,"rme":0.5717583336474411,"sem":1.914122713394521e-8,"variance":3.5539497890748193e-14}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,235,653|98|
|Function returning explicitly undefined|1,258,250|95|
|Function returning implicitly undefined|1,274,285|97|
|Function returning string|1,238,588|98|
|Function returning integer|1,283,851|95|
|Function returning float|1,259,537|97|
|Function returning functions|1,249,939|97|
|Function returning arrow functions|1,221,567|98|
|Function returning empty object|1,276,068|98|
|Function returning empty array|1,253,181|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1235653.133044165,"cycles":6,"stats":{"deviation":2.2195544306534857e-8,"mean":8.092886047530117e-7,"moe":4.394493569557633e-9,"rme":0.5430069747366326,"sem":2.242088555896752e-9,"variance":4.926421870633519e-16}},{"name":"Function returning explicitly undefined","hz":1258250.36819377,"cycles":7,"stats":{"deviation":6.7872673451121665e-9,"mean":7.947543869472569e-7,"moe":1.3648635157163136e-9,"rme":0.1717340021184295,"sem":6.96358936589956e-10,"variance":4.606699801402595e-17}},{"name":"Function returning implicitly undefined","hz":1274285.1933158746,"cycles":6,"stats":{"deviation":1.3808404530716833e-8,"mean":7.847536840617721e-7,"moe":2.7479808750278972e-9,"rme":0.350171134056325,"sem":1.4020310586877027e-9,"variance":1.9067203568392113e-16}},{"name":"Function returning string","hz":1238587.5050258907,"cycles":5,"stats":{"deviation":7.022794695416461e-9,"mean":8.073712966925955e-7,"moe":1.3904424105627703e-9,"rme":0.17221845961811266,"sem":7.094093931442706e-10,"variance":4.9319645333969585e-17}},{"name":"Function returning integer","hz":1283851.4105804516,"cycles":7,"stats":{"deviation":1.2240635551596444e-8,"mean":7.789063374147655e-7,"moe":2.461490909973567e-9,"rme":0.3160188576900524,"sem":1.2558627091701872e-9,"variance":1.498331587070068e-16}},{"name":"Function returning float","hz":1259536.5821248903,"cycles":6,"stats":{"deviation":7.427875714465778e-9,"mean":7.939427994325965e-7,"moe":1.4782055638673058e-9,"rme":0.18618539835914227,"sem":7.541865121771969e-10,"variance":5.51733376295505e-17}},{"name":"Function returning functions","hz":1249939.2743165526,"cycles":6,"stats":{"deviation":3.9317146625797215e-9,"mean":8.000388663255538e-7,"moe":7.824420753897885e-10,"rme":0.09780050799074495,"sem":3.9920514050499415e-10,"variance":1.545838018794437e-17}},{"name":"Function returning arrow functions","hz":1221566.633014102,"cycles":7,"stats":{"deviation":1.617395108543734e-8,"mean":8.186209192146916e-7,"moe":3.202278937505834e-9,"rme":0.39117970996609774,"sem":1.633815784441752e-9,"variance":2.615966937141197e-16}},{"name":"Function returning empty object","hz":1276068.4828327564,"cycles":6,"stats":{"deviation":3.890806446727482e-9,"mean":7.836570007434795e-7,"moe":7.703403743742946e-10,"rme":0.09830070727926236,"sem":3.9303080325219115e-10,"variance":1.5138374805896134e-17}},{"name":"Function returning empty array","hz":1253180.8559422286,"cycles":5,"stats":{"deviation":1.1059316705338362e-8,"mean":7.979694193845073e-7,"moe":2.235735586922194e-9,"rme":0.2801781036479656,"sem":1.1406814218990786e-9,"variance":1.2230848598897617e-16}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,754,007|98|
|using Array.includes (first item)|711,305,073|93|
|Using raw comparison|717,036,297|98|
|Using raw comparison (first item)|714,854,466|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":714754007.2893646,"cycles":9,"stats":{"deviation":1.1446811251647779e-11,"mean":1.3990827470732248e-9,"moe":2.2663530005207325e-12,"rme":0.1619884889054469,"sem":1.156302551286088e-12,"variance":1.310294878308502e-22}},{"name":"using Array.includes (first item)","hz":711305072.7493105,"cycles":6,"stats":{"deviation":3.5276857142639175e-11,"mean":1.4058665378764085e-9,"moe":7.1697577725692695e-12,"rme":0.5099885074012318,"sem":3.65803967988228e-12,"variance":1.2444566498621728e-21}},{"name":"Using raw comparison","hz":717036296.913943,"cycles":7,"stats":{"deviation":9.0376473172127e-12,"mean":1.3946295387052318e-9,"moe":1.7893628771125825e-12,"rme":0.12830381312400851,"sem":9.12940243424787e-13,"variance":8.167906903032192e-23}},{"name":"Using raw comparison (first item)","hz":714854466.3515627,"cycles":6,"stats":{"deviation":1.3422523466185388e-11,"mean":1.39888613287086e-9,"moe":2.6711875146502397e-12,"rme":0.19095103253102544,"sem":1.3628507727807346e-12,"variance":1.801641362002974e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,752,611|92|
|Using Object.getOwnPropertyNames()|50,920,108|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":55752610.622337684,"cycles":6,"stats":{"deviation":5.183648124895593e-10,"mean":1.793637981858634e-8,"moe":1.0592480444118458e-10,"rme":0.5905584377256629,"sem":5.404326757203295e-11,"variance":2.68702078827336e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":50920108.13888997,"cycles":6,"stats":{"deviation":1.8241196861247854e-9,"mean":1.9638607154415197e-8,"moe":3.7897834803334734e-10,"rme":1.9297618464155923,"sem":1.9335630001701394e-10,"variance":3.327412629307985e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,643,133|97|
|Length = 10_000 - Array.at|15,628,286|94|
|Length = 1_000_000 - Array.at|15,644,300|94|
|Length = 100 - Array[length - 1]|710,612,790|99|
|Length = 10_000 - Array[length - 1]|709,471,294|95|
|Length = 1_000_000 - Array[length - 1]|709,301,525|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15643132.711286897,"cycles":5,"stats":{"deviation":1.333202206794082e-9,"mean":6.39258145063537e-8,"moe":2.653177026111457e-10,"rme":0.41504000325999024,"sem":1.3536617480160496e-10,"variance":1.7774281242006102e-18}},{"name":"Length = 10_000 - Array.at","hz":15628286.123771956,"cycles":5,"stats":{"deviation":8.057810349125894e-10,"mean":6.398654286722552e-8,"moe":1.6289553713128365e-10,"rme":0.25457780625732196,"sem":8.310996792412432e-11,"variance":6.4928307622480355e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15644300.446870508,"cycles":6,"stats":{"deviation":4.2485676453251095e-10,"mean":6.392104289968686e-8,"moe":8.588843353689782e-11,"rme":0.13436644591622984,"sem":4.3820629355560114e-11,"variance":1.8050327036903347e-19}},{"name":"Length = 100 - Array[length - 1]","hz":710612790.3921739,"cycles":6,"stats":{"deviation":8.562936760442824e-12,"mean":1.4072361397380966e-9,"moe":1.6867907497679772e-12,"rme":0.11986550815003295,"sem":8.606075253918251e-13,"variance":7.332388596334305e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":709471293.9606862,"cycles":6,"stats":{"deviation":9.311874083627773e-12,"mean":1.4095002976334837e-9,"moe":1.872541120520396e-12,"rme":0.13285141717701987,"sem":9.553781227144877e-13,"variance":8.671099894933857e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":709301524.6814475,"cycles":8,"stats":{"deviation":9.888193375309008e-12,"mean":1.4098376574745236e-9,"moe":1.9478496202891113e-12,"rme":0.13816127055212454,"sem":9.93800826678118e-13,"variance":9.777636822750494e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,657,533|89|
|Object.create({})|1,459,287|82|
|Cached Empty.prototype|592,641,762|95|
|Empty.prototype|1,496,194|77|
|Empty class|910,132|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48657533.361721404,"cycles":7,"stats":{"deviation":1.92081626929498e-9,"mean":2.055180217554337e-8,"moe":3.9906798997354324e-10,"rme":1.9417664035732782,"sem":2.0360611733344044e-10,"variance":3.689535140388285e-18}},{"name":"Object.create({})","hz":1459287.0107181172,"cycles":3,"stats":{"deviation":7.882183281975854e-8,"mean":6.852661557700692e-7,"moe":1.7060653961152626e-8,"rme":2.4896390719866623,"sem":8.70441528630236e-9,"variance":6.212881329065964e-15}},{"name":"Cached Empty.prototype","hz":592641761.6810778,"cycles":7,"stats":{"deviation":2.2207424541729294e-11,"mean":1.687359994954484e-9,"moe":4.4657300197342504e-12,"rme":0.26465781060873805,"sem":2.278433683537883e-12,"variance":4.931697047766005e-22}},{"name":"Empty.prototype","hz":1496193.858803984,"cycles":3,"stats":{"deviation":7.230741517705401e-8,"mean":6.683625882540196e-7,"moe":1.615078164313156e-8,"rme":2.416470030933756,"sem":8.240194715883448e-9,"variance":5.228362289586861e-15}},{"name":"Empty class","hz":910132.2409731378,"cycles":4,"stats":{"deviation":5.603803537680471e-8,"mean":0.0000010987414300703964,"moe":1.191322953615733e-8,"rme":1.0842614294970245,"sem":6.078178334774148e-9,"variance":3.140261408892016e-15}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|772,208,377|84|
|Using optional chain (obj.field?.field2) (undefined)|820,763,446|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|828,166,140|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|822,965,402|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":772208377.3193958,"cycles":5,"stats":{"deviation":1.8108625387647783e-10,"mean":1.2949872461515482e-9,"moe":3.8725935066231e-11,"rme":2.9904491477670527,"sem":1.9758130135832144e-11,"variance":3.2792231343016185e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":820763445.9458706,"cycles":9,"stats":{"deviation":8.180557010841553e-11,"mean":1.2183778467955187e-9,"moe":1.749441014023878e-11,"rme":1.4358772351492763,"sem":8.9257194593055e-12,"variance":6.692151300762888e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":828166140.3354691,"cycles":8,"stats":{"deviation":6.879859371178713e-11,"mean":1.2074871831815358e-9,"moe":1.4712822291569612e-11,"rme":1.2184661250650857,"sem":7.5065419854947e-12,"variance":4.7332464967195554e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":822965402.3456701,"cycles":8,"stats":{"deviation":7.787424754409533e-11,"mean":1.2151179103638309e-9,"moe":1.645889630466927e-11,"rme":1.3545102219537808,"sem":8.397396073810852e-12,"variance":6.064398430559038e-21}}]}-->
