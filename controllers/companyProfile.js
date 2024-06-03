import CompanyProfile from "../models/CompanyProfile.js"


export async function getCompanyProfiles (req, res) {
    try {
        const profiles = await CompanyProfile.find();
        res.json(profiles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export async function addCompanyProfile (req, res) {
    const profile = new CompanyProfile({
        companyId: req.body.companyId,
        founder: req.body.founder,
        foundedYear: req.body.foundedYear,
        numberOfEmployees: req.body.numberOfEmployees
    });
    try {
        const newProfile = await profile.save();
        res.status(201).json(newProfile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export async function updateCompanyProfileById (req, res) {
    try {
        const profile = await CompanyProfile.findById(req.params.id);
        if (!profile) return res.status(404).json({ message: 'Profile not found' });

        profile.founder = req.body.founder || profile.founder;
        profile.foundedYear = req.body.foundedYear || profile.foundedYear;
        profile.numberOfEmployees = req.body.numberOfEmployees || profile.numberOfEmployees;

        const updatedProfile = await profile.save();
        res.json(updatedProfile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};