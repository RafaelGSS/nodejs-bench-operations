## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|750,656|88|
|Using brackets {}|707,254|86|
|Using '' + |707,750|88|
|Using date.toString()|780,635|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":750655.9458354423,"cycles":5,"stats":{"deviation":6.00299920111832e-8,"mean":0.0000013321682263997128,"moe":1.2542468553613714e-8,"rme":0.9415078595224194,"sem":6.399218649802915e-9,"variance":3.603599940862719e-15}},{"name":"Using brackets {}","hz":707254.3692602206,"cycles":6,"stats":{"deviation":1.2974088207420024e-7,"mean":0.0000014139184478223695,"moe":2.7421025459365713e-8,"rme":1.9393640065732145,"sem":1.3990319111921283e-8,"variance":1.6832696481391535e-14}},{"name":"Using '' + ","hz":707749.9244102124,"cycles":3,"stats":{"deviation":7.20839294169392e-8,"mean":0.0000014129284447940105,"moe":1.5060978481630323e-8,"rme":1.0659406381917698,"sem":7.68417269470935e-9,"variance":5.196092880186272e-15}},{"name":"Using date.toString()","hz":780635.4437562572,"cycles":4,"stats":{"deviation":7.836229240735503e-8,"mean":0.0000012810076816243517,"moe":1.665918460829399e-8,"rme":1.300474996931299,"sem":8.499583983823465e-9,"variance":6.140648871335811e-15}}]}-->
