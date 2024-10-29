## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|109,269,517|54748915|
|(short string) (true) String#slice and strict comparison|61,089,839|30578535|
|(long string) (true) String#startsWith|58,554,748|29277382|
|(long string) (true) String#slice and strict comparison|56,681,826|28346154|
|(short string) (false) String#startsWith|90,264,433|45132229|
|(short string) (false) String#slice and strict comparison|59,652,699|29829796|
|(long string) (false) String#startsWith|81,183,878|40608954|
|(long string) (false) String#slice and strict comparison|54,828,058|27416009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:58:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":109269517.02618867,"samples":54748915},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61089839.53197794,"samples":30578535},{"name":"(long string) (true) String#startsWith","opsSec":58554748.42443692,"samples":29277382},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56681826.736690804,"samples":28346154},{"name":"(short string) (false) String#startsWith","opsSec":90264433.80913174,"samples":45132229},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59652699.60778191,"samples":29829796},{"name":"(long string) (false) String#startsWith","opsSec":81183878.64069346,"samples":40608954},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54828058.098331906,"samples":27416009}]}-->
