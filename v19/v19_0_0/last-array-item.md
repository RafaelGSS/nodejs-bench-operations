## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|572,657,409|96|
|Length = 10_000 - Array.at|573,877,527|95|
|Length = 1_000_000 - Array.at|572,440,399|94|
|Length = 100 - Array[length - 1]|712,657,322|99|
|Length = 10_000 - Array[length - 1]|712,130,597|97|
|Length = 1_000_000 - Array[length - 1]|712,735,935|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":572657408.5586892,"cycles":6,"stats":{"deviation":4.307645897499819e-11,"mean":1.746244761797252e-9,"moe":8.617086460532072e-12,"rme":0.49346384018144646,"sem":4.396472683944935e-12,"variance":1.855581317824702e-21}},{"name":"Length = 10_000 - Array.at","hz":573877526.5641379,"cycles":7,"stats":{"deviation":1.6059192038033754e-11,"mean":1.7425320799493575e-9,"moe":3.2293711430681762e-12,"rme":0.1853263523941568,"sem":1.64763833830009e-12,"variance":2.578976489144467e-22}},{"name":"Length = 1_000_000 - Array.at","hz":572440398.7386086,"cycles":7,"stats":{"deviation":2.1502307999005598e-11,"mean":1.746906756063222e-9,"moe":4.346875713499856e-12,"rme":0.2488327266703031,"sem":2.2177937313774774e-12,"variance":4.623492492841001e-22}},{"name":"Length = 100 - Array[length - 1]","hz":712657321.811138,"cycles":12,"stats":{"deviation":1.74829722751196e-11,"mean":1.403198942036564e-9,"moe":3.4439254588862216e-12,"rme":0.24543386940470488,"sem":1.757104825962358e-12,"variance":3.0565431957260063e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":712130597.144699,"cycles":9,"stats":{"deviation":2.352061988123322e-11,"mean":1.404236812755299e-9,"moe":4.680787954803239e-12,"rme":0.33333323213617444,"sem":2.388157119797571e-12,"variance":5.532195595974633e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":712735934.7954892,"cycles":9,"stats":{"deviation":1.093296183863739e-11,"mean":1.4030441727158568e-9,"moe":2.1536558558008266e-12,"rme":0.15349879196119814,"sem":1.0988040080616461e-12,"variance":1.1952965456510148e-22}}]}-->
