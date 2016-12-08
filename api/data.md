###### Owner:
  * Owner ID
  * Owner name
  * Owner Address
  * Owner Phone
  * Pets

###### Pet:
  * Pet ID
  * Owner ID (relationship)
  * Pet name
  * Pet DOB
  * Pet Breed
  * Pet Markings
  * Pet Gender
  * Breeder
  * Date Acquired

###### Medical Record:(High Activity)
  * Vaccine Record data:
    * Pet ID (relationship)
    * Vaccination Date
    * Age at Vaccination
    * Vaccination Canine(all true/false)
    * Lyme Disease
    * Distemper
    * Adenovirus 2
    * Parvovirus
    * Leptospira
    * Coronavirus
    * Bordetella
    * Giardiasis
  * Vaccination Feline (All T/F)
    * Leukemia Virus
    * Panleukopenia
    * Calicivirus
    * Rhinortracheitis
    * Pneumonitis
    * FIP
  * Other Vacc.
    * Rabies (T/F)
  * Lab Test Data
    * Lab Test ID
    * Pet ID (RELATIONSHIP)
    * Date
    * Lab Test Type (Heartworm,   Leukemia/fiv, lyme disease, deworming)
    * Test Result
    * Injection?
    * Comments

###### Glossary:
  * Many Definitions


### Summary:
##### Main Entities:
  - PETS
  - OWNERS
  - MEDICAL EVENT
  - Glossary

##### Main Relationships:
  * Owners <=======> Pets
  * Pets ========> Medical Records
  * Vets ========> Pets
