## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|591,778|88|
|Using brackets {}|578,791|85|
|Using '' + |600,428|87|
|Using date.toString()|664,338|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":591778.3571204914,"cycles":4,"stats":{"deviation":2.2178593232735535e-7,"mean":0.0000016898218530090496,"moe":4.6339221256793314e-8,"rme":2.7422548225588104,"sem":2.3642459824894548e-8,"variance":4.9188999778314245e-14}},{"name":"Using brackets {}","hz":578791.0167745263,"cycles":4,"stats":{"deviation":1.377660028254464e-7,"mean":0.0000017277393238975576,"moe":2.9287929223474957e-8,"rme":1.6951590334475433,"sem":1.4942821032385182e-8,"variance":1.8979471534500903e-14}},{"name":"Using '' + ","hz":600428.4510583766,"cycles":4,"stats":{"deviation":8.773419467475098e-8,"mean":0.0000016654773740939453,"moe":1.8435942249561167e-8,"rme":1.1069464248705694,"sem":9.406092984469983e-9,"variance":7.697288915227103e-15}},{"name":"Using date.toString()","hz":664337.5302076562,"cycles":4,"stats":{"deviation":7.359233966028463e-8,"mean":0.0000015052589301818064,"moe":1.5289513908823498e-8,"rme":1.015739790826341,"sem":7.800772402460968e-9,"variance":5.415832456674703e-15}}]}-->
