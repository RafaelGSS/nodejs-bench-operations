## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|712,291,725|93|
|Using dot notation|712,421,897|96|
|Using define property (writable)|3,159,074|94|
|Using define property initialized (writable)|4,125,637|89|
|Using define property (getter)|1,646,633|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":712291725.4103355,"cycles":7,"stats":{"deviation":4.323871129853061e-11,"mean":1.403919158858573e-9,"moe":8.787945171958297e-12,"rme":0.6259580629345604,"sem":4.48364549589709e-12,"variance":1.869586154757679e-21}},{"name":"Using dot notation","hz":712421896.5168866,"cycles":6,"stats":{"deviation":3.200234123472622e-11,"mean":1.4036626399176052e-9,"moe":6.401801538959904e-12,"rme":0.4560783593510538,"sem":3.2662252749795426e-12,"variance":1.0241498445038579e-21}},{"name":"Using define property (writable)","hz":3159073.691577493,"cycles":5,"stats":{"deviation":3.2557524802479167e-9,"mean":3.1654848782607754e-7,"moe":6.581782470147429e-10,"rme":0.2079233584512867,"sem":3.3580522806874637e-10,"variance":1.059992421264046e-17}},{"name":"Using define property initialized (writable)","hz":4125637.4600812034,"cycles":6,"stats":{"deviation":5.0708194272365304e-9,"mean":2.423867849940255e-7,"moe":1.0535113371820943e-9,"rme":0.43464058372986875,"sem":5.375057842765787e-10,"variance":2.5713209663639418e-17}},{"name":"Using define property (getter)","hz":1646632.5449403194,"cycles":4,"stats":{"deviation":4.829584922928987e-8,"mean":6.073000336794898e-7,"moe":1.0090775459633413e-8,"rme":1.6615799275517489,"sem":5.148354826343578e-9,"variance":2.332489052778299e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.011ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.519ms
new Array(length)|10,000|0.518ms
array.push|1,000,000|36.976ms
new Array(length)|1,000,000|7.133ms
array.push|100,000,000|1,749.741ms
new Array(length)|100,000,000|5,380.036ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.368ms
new Array(length)|10,000|0.246ms
array.push|1,000,000|35.858ms
new Array(length)|1,000,000|4.413ms
array.push|100,000,000|3,178.436ms
new Array(length)|100,000,000|5,001.738ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|297|80|
|Array.from|16|45|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Array","hz":296.86048734888584,"cycles":4,"stats":{"deviation":0.000555129029940985,"mean":0.003368585725,"moe":0.00012164801222869273,"rme":3.6112488195232952,"sem":0.00006206531236157792,"variance":3.081682398832191e-7}},{"name":"Array.from","hz":16.38185844091374,"cycles":1,"stats":{"deviation":0.0005413470854052155,"mean":0.06104313522222223,"moe":0.0001581705472986263,"rme":0.2591127515367947,"sem":0.00008069925882582974,"variance":2.930566668767217e-7}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,737|77|
|new Blob (1024)|356|66|
|text (128)|2,763|80|
|text (1024)|377|80|
|arrayBuffer (128)|2,822|78|
|arrayBuffer (1024)|377|79|
|slice (0, 64)|33,677|62|
|slice (0, 512)|9,803|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":2737.2315701301586,"cycles":3,"stats":{"deviation":0.00003616699409184531,"mean":0.0003653326269185361,"moe":0.000008078358531217262,"rme":2.2112338006478187,"sem":0.000004121611495519011,"variance":1.3080514616395737e-9}},{"name":"new Blob (1024)","hz":355.8116356182028,"cycles":2,"stats":{"deviation":0.00042396344476097536,"mean":0.002810475824554068,"moe":0.00010228513337127035,"rme":3.639424060425772,"sem":0.00005218629253636243,"variance":1.797450024935926e-7}},{"name":"text (128)","hz":2762.909535368255,"cycles":4,"stats":{"deviation":0.000019095536584687693,"mean":0.00036193729371118,"moe":0.000004184493951279193,"rme":1.156137823868007,"sem":0.0000021349458935097923,"variance":3.646395174571461e-10}},{"name":"text (1024)","hz":377.07632374930904,"cycles":4,"stats":{"deviation":0.00015010101774795255,"mean":0.0026519829992424243,"moe":0.00003289233575927978,"rme":1.2402921047637157,"sem":0.000016781803958816215,"variance":2.2530315528971167e-8}},{"name":"arrayBuffer (128)","hz":2821.9541886627335,"cycles":4,"stats":{"deviation":0.000020709013956051112,"mean":0.000354364363538403,"moe":0.000004595874816834452,"rme":1.2969348189935554,"sem":0.0000023448340902216594,"variance":4.288632590319197e-10}},{"name":"arrayBuffer (1024)","hz":377.29934180607404,"cycles":2,"stats":{"deviation":0.00011543375470734672,"mean":0.0026504154372842354,"moe":0.00002545513167282086,"rme":0.9604204425742259,"sem":0.000012987312077969826,"variance":1.3324951725835891e-8}},{"name":"slice (0, 64)","hz":33676.6520761493,"cycles":4,"stats":{"deviation":0.000020857694310997253,"mean":0.000029694163117485973,"moe":0.000005191902459798491,"rme":17.484589275193752,"sem":0.0000026489298264278018,"variance":4.350434119710071e-10}},{"name":"slice (0, 512)","hz":9803.06410491398,"cycles":3,"stats":{"deviation":0.00015836176841947842,"mean":0.00010200892183279004,"moe":0.00004040921449619747,"rme":39.613412013544306,"sem":0.00002061694617152932,"variance":2.507844969694451e-8}}]}-->
