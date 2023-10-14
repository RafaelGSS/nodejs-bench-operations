## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,889|78|
|Intl.DateTimeFormat().format(new Date())|5,945|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,455|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,371|71|
|Reusing Intl.DateTimeFormat()|418,413|89|
|Date.toLocaleDateString()|420,426|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,230|75|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":6889.2998989512,"cycles":3,"stats":{"deviation":0.00007129073754171947,"mean":0.00014515263011735576,"moe":0.000015821289513680905,"rme":10.899760824787954,"sem":0.00000807208648657189,"variance":5.0823692592423296e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":5944.9633105459,"cycles":5,"stats":{"deviation":0.00016106902089387153,"mean":0.00016820961673995165,"moe":0.00003856831705981206,"rme":22.928722987008424,"sem":0.0000196777127856184,"variance":2.5943229491710424e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":9455.29880262459,"cycles":4,"stats":{"deviation":0.000011668753268487268,"mean":0.00010576080363768318,"moe":0.000002480681828931766,"rme":2.3455587926791104,"sem":0.0000012656539943529419,"variance":1.361598028408323e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8371.258209540436,"cycles":4,"stats":{"deviation":0.000021047785422800952,"mean":0.00011945635589884615,"moe":0.000004895908634334505,"rme":4.098491534833263,"sem":0.0000024979125685380126,"variance":4.430092712042723e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":418413.3607520298,"cycles":8,"stats":{"deviation":1.210156028390437e-7,"mean":0.0000023899810421987076,"moe":2.514215136158728e-8,"rme":1.0519812047737955,"sem":1.2827628245707797e-8,"variance":1.464477613049716e-14}},{"name":"Date.toLocaleDateString()","hz":420425.66081298474,"cycles":5,"stats":{"deviation":3.038990258214946e-8,"mean":0.00000237854178088531,"moe":6.209998075565108e-9,"rme":0.2610842544566824,"sem":3.168366365084239e-9,"variance":9.235461789525344e-16}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8229.725366629898,"cycles":4,"stats":{"deviation":0.0001185588868749136,"mean":0.00012151073765533241,"moe":0.00002683240205880507,"rme":22.08232998709604,"sem":0.00001369000105041075,"variance":1.4056209657018558e-8}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
