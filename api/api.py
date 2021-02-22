import json
import random
import time
import pickle
hmodel = pickle.load(open('hypomodel.pkl', 'rb'))
dmodel = pickle.load(open('diabmodel.pkl','rb'))
# prediction = model.predict([[98]])

file1 = open("../assets/database.json", "r")
pred1 = open("../assets/predictions.json", "r")

data = json.load(file1)
preddata = json.load(pred1)
j = 1
while(j ==1):
    for i in range(len(data)):
        bpsys = data[i]['BPsys'] = random.randint(80,200)
        bpdias = data[i]['BPdias'] = random.randint(60,150)
        olevel = data[i]['os_level'] = random.randint(60,100)
        puls = data[i]['pulse'] = random.randint(50,200)
        blevel = data[i]['bs_level'] = random.randint(50,220)
        chl = data[i]['cholesterol'] = random.randint(150,300)
        rr = data[i]['respiration_rate'] = random.randint(10,50)
        file2 = open("../assets/database.json", "w")
        json.dump(data, file2)


        #for diabetes
        diab = dmodel.predict([[blevel]])
        if(diab == 1):
            preddata[i]['diabetes'] = "Serious"
        elif(diab == 2):
            preddata[i]['diabetes'] = "Hypoglyxemia"
        elif(diab == 3):
            preddata[i]['diabetes'] = "Normal"
        elif(diab==4):
            preddata[i]['diabetes'] = "Prediabetes"


        #for hypoxemia
        hypo = hmodel.predict([[olevel]])
        if(hypo == 1):
            preddata[i]['Hypoxemia'] = "Dangerous"
        elif(hypo == 2):
            preddata[i]['Hypoxemia'] = "Normal"


        #for stress
        count = 0
        if(puls>150):
            count +=1
        if(olevel< 90):
            count +=1
        if(bpdias >90):
            count+=1
        if(bpsys>140):
            count+=1
        if(count == 4):
            preddata[i]['stress'] = "high stress"
        elif(count == 3):
            preddata[i]['stress'] = "stress"
        elif(count ==2):
            preddata[i]['stress'] = "slight stress"
        elif(count ==1):
            preddata[i]['stress'] = "very less stress"
        else:
            preddata[i]['stress'] = "no stress"


        #for bronchitis
        
        if(bpsys>140 and puls>150):
            preddata[i]['bronchitis'] = "infected"
        else:
            preddata[i]['bronchitis'] = "not infected"


        #for chd
        count = 0
        if(bpsys>140):
            count+=1
        if(bpdias>90):
            count+=1
        if(chl>220):
            count+=1
        if(count ==3):
            preddata[i]['CHD'] = "highly infected"
        elif(count == 2):
            preddata[i]['CHD'] = "infected"
        else:
            preddata[i]['CHD'] = "normal"


        #for asthama
        if(olevel<92 and puls > 125 and rr > 30 ):
            preddata[i]['Asthama'] = "Acute Asthama"
        elif((olevel>92 and olevel < 95 ) and ( puls>100 and puls<125) and (rr> 30 and rr< 40)):
            preddata[i]['Asthama'] = "Moderate Asthama"
        else:
            preddata[i]['Asthama'] = "Normal"
        

        pred2 = open("../assets/predictions.json", "w")
        json.dump(preddata, pred2)
    j = 0
    # time.sleep(500)





