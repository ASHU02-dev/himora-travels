import os
import shutil
import subprocess
import zipfile
import time

SRC = r"C:\Users\ashus\.gemini\antigravity\scratch\himora-travels-pro"
DESKTOP_HIMORA = r"C:\Users\ashus\OneDrive\Desktop\himora"
DESKTOP_FIXED = os.path.join(DESKTOP_HIMORA, "himora-travels-pro-fixed")
DESKTOP_UPDATED = os.path.join(DESKTOP_HIMORA, "himora-travels-pro-updated")

print("1. Staging and committing to git...")
subprocess.run(["git", "add", "."], cwd=SRC, check=True)
commit_msg = "Fix CSS brace balance, resilient lifecycle tab switching & frame bounding"
subprocess.run(["git", "commit", "-m", commit_msg], cwd=SRC)

print("2. Pushing to origin main...")
subprocess.run(["git", "push", "origin", "main"], cwd=SRC, check=True)

print("3. Pushing to origin gh-pages...")
subprocess.run(["git", "push", "origin", "main:gh-pages", "--force"], cwd=SRC, check=True)

print("4. Syncing files to desktop folders...")
for target in [DESKTOP_FIXED, DESKTOP_UPDATED]:
    os.makedirs(target, exist_ok=True)
    for root, dirs, files in os.walk(SRC):
        # Skip git directory
        if ".git" in root.split(os.sep):
            continue
        rel_path = os.path.relpath(root, SRC)
        dest_dir = os.path.join(target, rel_path) if rel_path != "." else target
        os.makedirs(dest_dir, exist_ok=True)
        for f in files:
            src_file = os.path.join(root, f)
            dest_file = os.path.join(dest_dir, f)
            shutil.copy2(src_file, dest_file)

print("5. Creating refreshed zip archives...")
zip_targets = [
    os.path.join(DESKTOP_HIMORA, "himora-travels-pro-fixed.zip"),
    os.path.join(DESKTOP_HIMORA, "himora-travels-pro-updated.zip"),
    os.path.join(DESKTOP_HIMORA, "himora-travels-pro.zip"),
    r"C:\Users\ashus\Desktop\himora-travels-pro.zip"
]

for zpath in zip_targets:
    os.makedirs(os.path.dirname(zpath), exist_ok=True)
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(DESKTOP_FIXED):
            rel_dir = os.path.relpath(root, DESKTOP_FIXED)
            for f in files:
                abs_f = os.path.join(root, f)
                arcname = f if rel_dir == "." else os.path.join(rel_dir, f)
                zf.write(abs_f, arcname)
    print(f"Created: {zpath} ({os.path.getsize(zpath)} bytes)")

print("6. Deployment and sync complete!")
