## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|306,875,952|93|
|(short string) (true) String#slice and String#indexOf|859,800,852|95|
|(short string) (true) String#slice and strict comparison|859,524,083|99|
|(long string) (true) String#startsWith|199,692,964|94|
|(long string) (true) String#slice and strict comparison|855,370,266|98|
|(short string) (false) String#startsWith|880,562,842|94|
|(short string) (false) String#slice and strict comparison|857,657,251|99|
|(long string) (false) String#startsWith|881,695,104|92|
|(long string) (false) String#slice and strict comparison|859,707,827|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":306875952.4145736,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":859800852.1005538,"samples":8},{"name":"(short string) (true) String#slice and strict comparison","opsSec":859524082.5934092,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":199692964.45399755,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":855370266.4286667,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":880562842.2744597,"samples":9},{"name":"(short string) (false) String#slice and strict comparison","opsSec":857657251.4896599,"samples":8},{"name":"(long string) (false) String#startsWith","opsSec":881695103.5700371,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":859707826.662527,"samples":6}]}-->
